<template>
    <div class="wrap">
        <div>
            <div class="logo">
                <img src="../../assets/imgs/regLogin.png" alt="">
            </div>
        </div>
        <div class="loginContent">
            <div>
                <h1>Sign in</h1>
                <h2>登录</h2>
                <ul>
                    <li>
                        <input type="text" placeholder="请输入手机号">
                    </li>
                    <li>
                        <input type="text" placeholder="请输入验证码">
                        <span>获取验证码</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped lang="less">
    .wrap {
        width: 100%;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        height: 980px;
        background: url("../../assets/imgs/Bitmap.png") no-repeat;
        background-size: contain;
        position: relative;
        .logo {
            position: absolute;
            top: 42px;
            left: 34px;
            img {
                max-width: 100%;
            }
        }
        .loginContent {
            width: 40%;
            /*margin: auto;*/
            min-width: 540px;
            background: #fff;
            height: 100%;
            padding: 130px 42px;
            text-align: left;
            > div {
                width: 60%;
                margin: auto;
                min-width: 170px;
                h1 {
                    font-size: 78px;
                    color: #3c3c3c;
                }
                h2 {
                    font-size: 40px;
                    color: #3c3c3c;
                }
                ul {
                    li {
                        padding: 40px 0 10px;
                        border-bottom: 1px solid #d9d9d9;
                        position: relative;
                        >input {
                            padding: 10px 0;
                            font-size: 24px;
                            color: #cecece;
                        }
                        span {
                            position: absolute;
                            right: 0;
                            bottom: -10px;
                            background: #fff;
                            padding: 20px;
                            color: #3c3c3c;
                            font-size: 20px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>
