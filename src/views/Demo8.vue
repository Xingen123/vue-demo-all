<template>
  <div>
    <video-player ref="videoPlayer" class="video-player vjs-custom-skin" :playsinline="true" :options="playerOptions"></video-player>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        live: true,
        playbackRates: [0.5, 1.0, 1.25, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        controls: true, // 控制条
        preload: 'auto', // 视频预加载
        muted: true, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该								代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应						其容器。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          currentTimeDisplay: true, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: true, // 暂停和播放键
          progressControl: true, // 进度条
          fullscreenToggle: true, // 全屏按钮
        },
        sources: [
          {
            type: 'video/mp4',
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
          },
        ],
        poster: 'https://pic1.zhimg.com/80/v2-66e0acdeffca0db38b0f9ad85e483b58_720w.jpg?source=1940ef5c', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时															显示的默认信息。
      },
    };
  },
}
</script>

<style lang="scss" scoped>
.player {
  width: 1000px;
  height: 800px;
}
</style>
