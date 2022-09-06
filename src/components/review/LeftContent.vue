<template>
    <div class="p-4 sticky left-content ">
        <div class="flex-center h-[150px]">
            <img src="@/assets/images/review/netflix-logo.png" alt="">
        </div>
        <p class="text-xl font-semibold text-center">Netflix</p>
        <p class="text-12px text-primary font-medium text-center">Netflix, Inc.</p>
        <Button class="btn-primary w-full h-[44px] mt-5 mb-6" label="Get" v-ripple />
        <div class="flex-center">
            <div class="w-44px">
                <div class="flex items-end">
                    <p class="font-semibold leading-[15px] mr-1">4.5</p>
                    <img class="w-4 h-4" src="@/assets/images/review/star.png" alt="">
                </div>
                <div class="text-10px text-[#656565]">Average</div>
            </div>
            <div class="h-7 w-[1px] bg-[#D1D1D1] mx-3"></div>
            <div class="w-44px">
                <div class="font-semibold leading-[15px]">303K</div>
                <div class="text-10px text-[#656565]">Ratings</div>
            </div>
        </div>
        <p class="text-12px mt-10">Netflix has something for everyone. Watch TV shows and movies recomended just for you, including award-winning Netflix original series,...</p>
        <div class="flex-center entertainment">
            <Button class="w-[128px] h-[34px] rounded-[50px] text-black text-12px mt-5 mb-6" label="Entertainment" v-ripple />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Button from 'primevue/button';
</script>

<style lang="scss">
    .left-content{
        top:76px;
        height: calc(100vh - 76px);
        background-color: #fff;
        width: 100%;
        min-width: 222px;
        max-width: 380px;
        overflow: auto;
        .entertainment{
            button{
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
            }
        }
    }
</style>