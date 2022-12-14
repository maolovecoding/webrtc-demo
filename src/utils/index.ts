import { handleError } from "@/error";
export interface DeviceInfo {
  id: string;
  kind: MediaDeviceKind; // "audioinput" | "audiooutput" | "videoinput"
  label: string;
}
export const initInnerLocalDevice = async () => {
  const localDevice = {
    audioIn: [] as DeviceInfo[], // 音频输入
    videoIn: [] as DeviceInfo[], // 视频输入
    audioOut: [] as DeviceInfo[], // 音频输出
  };
  // 同时请求不带任何参数的音频和视频
  const constraints: MediaStreamConstraints = { video: true, audio: true };
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("浏览器不支持获取媒体设备");
    return;
  }
  try {
    // 如果用户授权且同意使用设备摄像头、麦克风，那么enumerateDevices函数就能获取设备信息了，在这里getUserMedia函数可以理解为获取摄像头或者麦克风权限集合的 探路函数。
    const stream = await getLocalUserMedia(constraints);
    stream.getTracks().forEach((trick) => {
      trick.stop();
    });
    // List cameras and microphones.
    // 获取所有可用媒体设备的集合 也可能没找到 那么就是reject
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((device) => {
      const obj: DeviceInfo = {
        id: device.deviceId,
        kind: device.kind,
        label: device.label,
      };
      // "audioinput" "audiooutput" "videoinput"
      if (device.kind === "audioinput") {
        // 过滤设备 相同的设备只记录一次
        if (filterDevice(localDevice.audioIn, device.deviceId))
          localDevice.audioIn.push(obj);
      } else if (device.kind === "audiooutput") {
        if (filterDevice(localDevice.audioOut, device.deviceId))
          localDevice.audioOut.push(obj);
      } else if (device.kind === "videoinput") {
        if (filterDevice(localDevice.videoIn, device.deviceId))
          localDevice.videoIn.push(obj);
      }
    });
  } catch (err: any) {
    handleError(err);
  }
  console.log(localDevice);
  return localDevice;
};

const filterDevice = (devices: DeviceInfo[], id: string) => {
  return devices.filter((device) => device.id === id).length === 0;
};

/**
 * 获取设备 stream
 * @param constraints
 * @returns {Promise<MediaStream>}
 */
export const getLocalUserMedia = async (
  constraints: MediaStreamConstraints | undefined
) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};
/**
 * 获取指定媒体设备id对应的媒体流
 * @param videoId 视频设备id
 * @param audioId 音频设备id
 */
export const getTargetIdStream = async (videoId?: string, audioId?: string) => {
  const constraints: MediaStreamConstraints = {
    audio: { deviceId: audioId ? { exact: audioId } : undefined },
    video: {
      deviceId: videoId ? { exact: videoId } : undefined,
      width: 1920, // 分辨率 1920 * 1080
      height: 1080,
      frameRate: { ideal: 24, max: 30 }, // 帧率 流畅度理想情况24 最大30 类似fps
    },
  };
  const stream = await getLocalUserMedia(constraints);
  return stream;
};

export const getShareMedia = async () => {
  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      width: 1920,
      height: 1080,
    },
  };
  return await navigator.mediaDevices.getDisplayMedia(constraints);
};
/**
 * 关闭当前标签页的媒体流
 * @param stream
 */
export const closeMediaStream = (stream: MediaStream) => {
  stream.getTracks().forEach((track) => track.stop());
};
