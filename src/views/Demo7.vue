<template>
  <div class="card vue-avatar-cropper-demo text-center">
    <div class="card-body">
      <img :src="user.avatar" class="card-img avatar" />
      <div class="card-img-overlay">
        <button id="pick-avatar" class="btn btn-primary btn-sm">Select an new image</button>
      </div>
    </div>
    <div class="card-footer text-muted" v-html="message"></div>
    <avatar-cropper trigger="#pick-avatar" upload-url="https://demo.overtrue.me/upload.php" @uploading="handleUploading" @uploaded="handleUploaded" @completed="handleCompleted" @error="handlerError" />
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper';

export default {
  components: { AvatarCropper },
  data () {
    return {
      message: 'ready',
      user: {
        avatar: 'https://pic1.zhimg.com/80/v2-66e0acdeffca0db38b0f9ad85e483b58_720w.jpg?source=1940ef5c'
      }
    };
  },
  methods: {
    handleUploading (form, xhr) {
      this.message = 'uploading...';
    },
    handleUploaded (response) {
      if (response.status == 'success') {
        this.user.avatar = response.url;
        // Maybe you need call vuex action to
        // update user avatar, for example:
        // this.$dispatch('updateUser', {avatar: response.url})
        this.message = 'user avatar updated.';
      }
    },
    handleCompleted (response, form, xhr) {
      this.message = 'upload completed.';
    },
    handlerError (message, type, xhr) {
      this.message = 'Oops! Something went wrong...';
    }
  }
};
</script>

<style>
.vue-avatar-cropper-demo {
  max-width: 18em;
  margin: 0 auto;
}
.avatar {
  width: 160px;
  border-radius: 6px;
  display: block;
  margin: 20px auto;
}
</style>
