<template>
  <div class="input-box">
    <div class="input-content" @keydown="keydown" @keyup="keyup" @paste="paste" @mousewheel="mousewheel" @input="inputEvent">
      <input ref="firstinput" v-model.trim.number="input[0]" max="9" min="0" maxlength="1" data-index="0" type="number" />
      <input v-model.trim.number="input[1]" max="9" min="0" maxlength="1" data-index="1" type="number" />
      <input v-model.trim.number="input[2]" max="9" min="0" maxlength="1" data-index="2" type="number" />
      <input v-model.trim.number="input[3]" max="9" min="0" maxlength="1" data-index="3" type="number" />
      <input v-model.trim.number="input[4]" max="9" min="0" maxlength="1" data-index="4" type="number" />
      <input v-model.trim.number="input[5]" max="9" min="0" maxlength="1" data-index="5" type="number" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: [],
      pasteResult: [],
    };
  },
  computed: {
    input () {
      if (this.code && Array.isArray(this.code) && this.code.length === 6) {
        return this.code;
      } else if (/^\d{6}$/.test(this.code.toString())) {
        return this.code.toString().split('');
      } else if (this.pasteResult.length === 6) {
        return this.pasteResult;
      } else {
        return new Array(6);
      }
    }
  },
  mounted () {
    // 等待dom渲染完成，在执行focus,否则无法获取到焦点
    this.$nextTick(() => {
      this.$refs.firstinput.focus()
    })
  },
  methods: {
    // 解决一个输入框输入多个字符
    inputEvent (e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      el.value = el.value.replace(/Digit|Numpad/i, '').replace(/1/g, '').slice(0, 1);
      this.$set(this.input, index, el.value)
    },
    keydown (e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      if (e.key === 'Backspace') {
        if (this.input[index].length > 0) {
          this.$set(this.input, index, '')
        } else {
          if (el.previousElementSibling) {
            el.previousElementSibling.focus()
            this.$set(this.input, index - 1, '')
          }
        }
      } else if (e.key === 'Delete') {
        if (this.input[index].length > 0) {
          this.$set(this.input, index, '')
        } else {
          if (el.nextElementSibling) {
            this.$set(this.input, index = 1, '')
          }
        }
        if (el.nextElementSibling) {
          el.nextElementSibling.focus()
        }
      } else if (e.key === 'Home') {
        el.parentElement.children[0] && el.parentElement.children[0].focus()
      } else if (e.key === 'End') {
        el.parentElement.children[this.input.length - 1] && el.parentElement.children[this.input.length - 1].focus()
      } else if (e.key === 'ArrowLeft') {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus()
        }
      } else if (e.key === 'ArrowRight') {
        if (el.nextElementSibling) {
          el.nextElementSibling.focus()
        }
      } else if (e.key === 'ArrowUp') {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString());
        }
      } else if (e.key === 'ArrowDown') {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString());
        }
      }
    },
    keyup (e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      // 解决输入e的问题
      el.value = el.value.replace(/Digit|Numpad/i, '').replace(/1/g, '').slice(0, 1);
      if (/Digit|Numpad/i.test(e.code)) {
        // 必须在这里符直，否则输入框会是空值
        this.$set(this.input, index, e.code.replace(/Digit|Numpad/i, ''));
        el.nextElementSibling && el.nextElementSibling.focus();
        if (index === 5) {
          if (this.input.join('').length === 6) {
            document.activeElement.blur();
            this.$emit('complete', this.input);
          }
        }
      } else {
        if (this.input[index] === '') {
          this.$set(this.input, index, '');
        }
      }
    },
    mousewheel (e) {
      var index = e.target.dataset.index;
      if (e.wheelDelta > 0) {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString());
        }
      } else if (e.wheelDelta < 0) {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString());
        }
      } else if (e.key === 'Enter') {
        if (this.input.join('').length === 6) {
          document.activeElement.blur();
          this.$emit('complete', this.input);
        }
      }
    },
    paste (e) {
      // 当进行粘贴时
      e.clipboardData.items[0].getAsString(str => {
        if (str.toString().length === 6) {
          this.pasteResult = str.split('');
          document.activeElement.blur();
          this.$emit('complete', this.input);
          this.pasteResult = [];
        } else {
          // 如果粘贴内容不合规，清除所有内容
          this.input[0] = new Array(6)
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
.input-box {
  .input-content {
    width: 512px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      color: inherit;
      font-family: inherit;
      border: 0;
      outline: 0;
      border-bottom: 1px solid #919191;
      height: 60px;
      width: 60px;
      font-size: 44px;
      text-align: center;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
