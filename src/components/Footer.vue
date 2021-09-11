<template>
    <div class="footer">
    <article>
        <section>
        <h6 id="contact">聯絡我們</h6>
        <form @submit.prevent="sendEmail">
            <div class="inputContent">
            <input type="text" name="name" placeholder="姓名">
            <input type="email" name="email" placeholder="信箱">
            <textarea  name= "question" cols="30" rows="10" placeholder="告訴我們你的問題"/>
            </div>
            <input type="submit" value="送出訊息" id="sendbtn">
            <div class="sendStatusMsg"></div>
        </form>
        </section>
        <section>
        <img src="@/assets/image/footer/LOGO2.png" alt="">
        <hr>
            <div class="footerFont">聯絡資訊</div>
            <div class="footerFont">電話 : 0934031102</div>
            <div class="footerFont">信箱 : bohau888@gmail.com</div>
            <img src="@/assets/image/footer/QRCODE.png" alt="">
            <div class="footerFont ">© 2021 FlashPig.All rights reserved.</div>
        </section>
    </article>
    </div>
</template>
<script>
import emailjs from 'emailjs-com'
export default {
  data () {
    return {
    }
  },
  methods: {
    sendEmail: (e) => {
      const btn = document.getElementById('sendbtn')
      const statusMsg = document.querySelector('.sendStatusMsg')
      statusMsg.innerHTML = ''
      btn.value = '送出中 ...'
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          console.log(e)
          btn.value = '送出訊息'
          statusMsg.innerHTML = '送出成功'
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          btn.value = '送出訊息'
          statusMsg.innerHTML = '送出失敗'
          console.log('FAILED...', error)
        })
    }
  }
}
</script>
<style lang="">

</style>
