<template>
    <div class="mr-4 p-[14px] flex flex-col justify-between app-item">
        <div>
            <div class="flex-center py-3">
                <img class="w-[98px] h-[98px] rounded-[50%]" src="@/assets/images/home/tiktok-app.png" alt="">
            </div>
            <p class="text-20px font-semibold">Tiktok</p>
            <p class="text-10px text-[#313131] mb-4">Apps - Entertainment</p>
            <rating-component :rating-value="3.5" />
        </div>
        <div class="flex-center free">
            <p class="text-10px font-medium text-[#0e0e0e]">free</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import RatingComponent from '@/components/Rating.vue'

</script>

<style lang="scss">
    .app-item{
        height: 320px;
        width: 164px;
        background: #FFFFFF;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        transition: all 200ms linear 0ms;
        .free{
            width: 38px;
            height: 19px;
            background: #F2F2F2;
            border-radius: 4px;
        }
        &:hover{
            transform: translateY(-2px);
            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.15);
        }
    }
</style>