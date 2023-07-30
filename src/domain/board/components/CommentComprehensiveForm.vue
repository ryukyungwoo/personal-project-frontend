<template>
    <div>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-if="!comments || (Array.isArray(comments) && comments.length === 0)"
            align="center"
          >
            <v-list-item-content>
              <v-list-item-title>현재 등록된 댓글이 없습니다!</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
  
          <v-list-item
            v-for="comment in comments"
            :key="comment.id"
            class="text-start"
          >
            <v-list-item-content>
              <div class="flex-container">
                <div>
                  <v-list-item-title>{{ comment.writer }}</v-list-item-title>
                </div>
                <div>
                  <v-list-item-title>{{ comment.content }}</v-list-item-title>
                  <v-list-item-subtitle>{{ comment.createDate }}</v-list-item-subtitle>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div>
      <form @submit.prevent="onSubmit">
        <div class="input-container">
          <div class="left-inputs">
            <div class="input-box">
              <label for="writer">작성자</label>
              <input
                type="text"
                id="writer"
                :value="nickname || writer"
                :disabled="nickname !== ''"
                @input="updateWriter"
                class="outlined-input"
              />
            </div>
            <div v-if="!nickname" class="input-box">
              <label for="password">비밀번호</label>
              <input
                type="text"
                id="password"
                v-model="password"
                class="outlined-input"
              />
            </div>
          </div>
          <div class="right-inputs">
            <div class="input-box textarea-box">
              <label for="content">본문</label>
              <textarea
                class="content-textarea outlined-input"
                id="content"
                cols="40"
                rows="5"
                v-model="content"
              ></textarea>
            </div>
            <div>
              <v-btn type="submit" color="primary">등록</v-btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    comments: {
      type: Array,
    },
    nickname: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      writer: 'ㅇㅇ',
      content: '본문을 입력하세요',
      password: '',
    };
  },
  methods: {
    updateWriter(event) {
      this.writer = event.target.value;
    },
    checkCommonInputRules() {
      if (!this.content) {
        alert("내용을 입력해주세요.");
        return false;
      }

      return true;
    },
    checkInputRulesEnabled() {
      if (!this.checkCommonInputRules()) {
        return false;
      }

      const namePattern = /^([가-힣ㄱ-ㅎㅏ-ㅣ]{2,}|[a-zA-Z]{4,})$/;
      const passwordPattern = /^.{6,}$/;

      if (!namePattern.test(this.writer)) {
        alert("작성자 이름은 한글 두 글자 이상 또는 영어 네 글자 이상이어야 합니다.");
        return false;
      }

      if (!passwordPattern.test(this.password)) {
        alert("비밀번호는 6글자 이상이어야 합니다.");
        return false;
      }

      return true;
    },
    onSubmit() {
      let isInputValid = false;

      if (this.nickname) {
        isInputValid = this.checkCommonInputRules();
      } else {
        isInputValid = this.checkInputRulesEnabled();
      }

      if (!isInputValid) return;

      const { writer, content, password, nickname } = this;
      this.$emit('commentSubmit', { writer, content, password, nickname });
    },
  },
};
</script>

  
  <style>
      .input-container {
    display: flex;
  }

  .left-inputs {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .right-inputs {
    display: flex;
    flex-direction: column;
  }

  .input-box {
    margin-bottom: 10px;
  }

  .outlined-input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    outline: none;
  }

  .outlined-input:focus {
    border-color: blue;
  }

  .content-textarea {
    resize: none;
  }
  </style>
  