<template>
    <section class="contacts">
        <div class="container" v-if="!submitted">
            <h2 class="title title-with-lines">Контакты</h2>
            <p class="contacts__paragraph">Оставьте свои контактные данные, и наш менеджер свяжется с Вами.</p>
            <div class="wrapper">
                <div class="contacts-left">
                    <input type="text" class="input form__input" v-model="message.fromName" placeholder="Имя">
                    <input type="email" class="input form__input" v-model="message.fromEmail" placeholder="Email">
                    <input type="tel" class="input form__input" v-model="message.fromTelephone" placeholder="Номер телефона">
                </div>
                <div class="contacts-right">
                    <textarea rows="4" class="input form__input contacts__textarea" v-model="message.fromMessage" placeholder="Текст сообщения"></textarea>
                    <button class="btn contacts__btn" @click.prevent="postMessage">Отправить</button>
                </div>
            </div>
        </div>
        <div class="loader" v-if="showLoader">
            <img src="../assets/loader.gif" alt="">
        </div>
        <div class="container" v-if="submitted">
            <h2 class="title title--success">Ваше сообщение отправлено!</h2>
            <h4 class="little-title title--success transparent">Очень скоро наш менеджер Вам позвонит</h4>
            <button class="btn contacts__btn" style="max-width: 250px;" @click.prevent="submitted = false">Отправить еще</button>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                message: {
                    fromName: '',
                    fromEmail: '',
                    fromTelephone: '',
                    fromMessage: ''
                },
                submitted: false,
                showLoader: false
            }
        },
        methods: {
            postMessage(){
                this.showLoader = true;

                setTimeout(() => {
                    this.showLoader = false;
                    this.submitted = true;
                    this.message.fromName = '';
                    this.message.fromEmail = '';
                    this.message.fromTelephone = '';
                    this.message.fromMessage = '';
                }, 5000)
            }
        },
        mounted(){},
        computed: {}
    }
</script>

<style scoped lang="scss">
    .contacts {
        position: relative;
    }

    .container {
        max-width: 1170px;
        width: 97%;
        margin: 0 auto;
    }

    .title {
        font-size: 30px;
        line-height: 30px;
        color: #2a3a3f;
        text-transform: uppercase;
    }

    .title-with-lines {
        position: relative;
        display: table;
        padding: 20px 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -3px;
            left: -25px;
            width: 15px;
            height: 5px;
            background-color: #00BC8C;
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -3px;
            right: -25px;
            width: 15px;
            height: 5px;
            background-color: #00BC8C;
        }
    }

    .contacts__paragraph {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        color: #949494;
    }

    .contacts-left, .contacts-right {
        display: inline-block;
        vertical-align: top;
        width: 49%;
        font-size: 16px;
    }

    .contacts-left {
        margin-right: 2%;
    }

    .input {
        margin-bottom: 20px;
        font-size: 1rem;
        box-shadow: inset 0px 5px 12px -15px rgba(0,0,0,0.89);
        border: 1px solid #ccc;
        transition: border .5s;

        &:focus {
            outline: none;
            border: 1px solid #00BC8C;
        }
    }

    .form__input {
        display: block;
        width: 100%;
    }

    .contacts__textarea {
        padding: 12px;
    }

    .contacts__btn {
        display: block;
        width: 100%;
        padding: 11px 60px;
        margin-bottom: 20px;
    }

    .wrapper {
        display: block;
        position: relative;
        width: 100%;
        font-size: 0;
    }

    .btn {
        padding: 15px 60px;
        text-transform: uppercase;
        display: inline-block;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        background-color: #00BC8C;
        color: #fff;
        transition: background .5s;

        &:hover {
            background-color: darken(#00BC8C, 5%);
        }

        &:focus {
            outline: 0;
        }

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .loader {
        width: 26px;
        height: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -13px;
        margin-top: -13px;

        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }

    .form__input {
        display: block;
        width: 100%;
    }

    .input {
        padding: 10px;
        border-radius: 4px;

        margin-right: 20px;
        font-size: 1rem;
        box-shadow: inset 0 5px 12px -15px rgba(0,0,0,0.89);
        border: 1px solid #ccc;
        transition: border .5s;

        &:focus {
            outline: none;
            border: 1px solid #00BC8C;
        }
    }

    .title--success {
        margin-top: 30px;
        margin-bottom: 15px;
    }
</style>