export function handleError(error: Error) {
  alert("摄像头无法正常使用，请检查是否占用或缺失");
  console.error(
    "navigator.MediaDevices.getUserMedia error: ",
    error.message,
    error.name
  );
}
