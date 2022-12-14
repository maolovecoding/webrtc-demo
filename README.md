# webRTC demo

## 获取计算机的摄像头或者麦克风

使用浏览器提供的新API：`navigator.mediaDevices.getUserMedia`。
`getUserMedia`直接调用不使用任何参数，则获取的就是 PC 的默认摄像头和麦克风。

`constraints` 参数是一个包含了video 和 audio两个成员的MediaStreamConstraints 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的 Promise 对象就会处于 rejected［失败］状态，NotFoundError作为 rejected［失败］回调的参数。

以下同时请求不带任何参数的音频和视频：

```ts
const constraints = { video: true, audio: true };
const stream = await navigator.mediaDevices.getUserMedia(constraints);
```

`MediaDevices` 的方法 `enumerateDevices()` 请求一个可用的媒体输入和输出设备的列表，例如麦克风，摄像机，耳机设备等。返回的 Promise (en-US) 完成时，会带有一个描述设备的 MediaDeviceInfo (en-US) 的数组。

## 屏幕共享 getDisplayMedia

参数 Constraints：和上面的API基本一致，但是video是不能为false的，**但是可以设置指定的分辨率**.

```js
const constraints = {video: { width: 1920, height: 1080 } }
navigator.mediaDevices.getDisplayMedia(constraints)
  .then((stream) => {
    /* use the stream */
  })
  .catch((err) => {
    /* handle the error */
  });

```
