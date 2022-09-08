<template>
    <div class="w-full h-full flex flex-col items-center grow login">
        <div class="w-full sm:w-[60%] xl:w-[40%] h-full flex justify-center items-center sm:items-start flex-col grow">
            <div class="w-[90%] h-full sm:w-[310px] sm:h-[564px]  flex flex-col justify-between py-[80px] sm:py-10 login-box">
                <div class="w-full">
                    <p class="text-2xl font-semibold text-primary">Welcome to</p>
                    <p class="text-[40px] font-bold text-primary">GAP Store</p>
                    <p class="text-14px text-primary mt-1 mb-6">Login your account</p>
                </div>
                <div class="w-full">
                    <p class="font-semibold text-[#3255D1] mb-2">ID</p>
                    <!-- <input type="text" class="input w-full h-[40px] mb-2" placeholder="Enter your ID"> -->
                    <div class="mb-2">
                        <input-text class="input w-full h-[40px]" type="text" v-model="id" placeholder="Enter your ID" />
                    </div>
                    <p class="font-semibold text-[#3255D1] mb-2">User/ Email</p>
                    <!-- <input type="text" class="input w-full h-[40px] mb-2" placeholder="Enter your user/ email"> -->
                    <div class="mb-2">
                        <input-text class="input w-full h-[40px]" type="text" v-model="userName" placeholder="Enter your user/ email" />
                    </div>
                    <p class="font-semibold text-[#3255D1] mb-2">Password</p>
                    <div class="mb-3">
                        <!-- <input :type="showPassword ? 'text' : 'password'" class="input w-full h-[40px] pr-8" placeholder="Enter your password"> -->
                        <!-- <input-text class="input w-full h-[40px]" type="text" v-model="password" placeholder="Enter your password" /> -->
                        <!-- <img class="absolute right-0 bottom-1/2 translate-y-1/2 cursor-pointer mr-3" src="@/assets/images/login/eye.svg"  @click="showPassword = !showPassword"> -->
                        <Password class="input w-full h-[40px] password-input" v-model="password" placeholder="Enter your password" toggleMask :feedback="false"></Password>
                    </div>
                    <div class="flex justify-between mb-6">
                        <!-- <div class="flex">
                            <input class="w-5 h-5 border-none mr-[6px]" type="checkbox" v-model="remember">
                            <p class="text-14px text-primary">Remember me</p>
                        </div> -->
                        <div class="flex-center field-checkbox">
                            <Checkbox class="w-5 h-5 border-none mr-[6px] remember-check" inputId="remember" v-model="remember" :binary="true" />
                            <label class="text-14px text-[#3255D1]" for="remember">Remember me</label>
                        </div>
                        <p class="text-14px text-danger cursor-pointer">Forgot password ?</p>
                    </div>
                    <Button class="btn-primary bg-[#4C70F0] w-full h-[44px] " label="Login" v-ripple @click="login" />
                    <!-- <split-button class="btn-primary bg-[#4C70F0] w-full h-[44px]" label="Submit" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import { useRouter } from 'vue-router';


    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import Checkbox from 'primevue/checkbox';
    import Password from 'primevue/password';

    const router = useRouter();


    // CREATE DATA

    const remember = ref(false);
    const id = ref('');
    const userName = ref('');
    const password = ref('');
    // const remember = ref('');
    
    // CREATE FUNCTION

    const login = () => {
        router.push({ path: '/home' });
    }

</script>

<style lang="scss">
    @import '@/style/login.scss';
</style>