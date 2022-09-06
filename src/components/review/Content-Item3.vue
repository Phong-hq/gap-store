<template>
    <div class="mb-[10px] rating-reviews">
        <content-component :title="'Rating and reviews'" :title-button="true">
            <template #content>
                <div class="w-full">
                    <div class="flex">
                        <div class="mr-8">
                            <p class="text-[48px] font-bold">4.5</p>
                            <p class="text-12px text-[#656565]">303,120 RATINGS</p>
                        </div>
                        <div class="mt-[14px]">
                            <div class="flex items-center mt-2" v-for="item in ratingValueList" :key="item.id">
                                <p class="w-[14px] leading-[11px] mr-1">{{ item.id }}</p>
                                <img class="mr-2" src="@/assets/images/rating-icon-orange.svg" alt="">
                                <ProgressBar class="w-[160px] h-[6px]" :value="item.value" :showValue="false" />
                            </div>
                        </div>
                    </div>
                    <p class="text-14px font-semibold mt-3">Phong</p>
                    <div class="mt-1 flex">
                        <rating-component class="mr-2" :rating-value="4.5" :orange="true" />
                        <p class="text-12px font-semibold text-primary">MOST HELPFUL FAVORABLE REVIEW</p>
                    </div>
                    <p class="text-14px font-medium text-[#656565] mt-2">So Good</p>
                    <div class="flex items-center">
                        <p class="text-14px font-semibold mr-3">Huỳnh</p>
                        <p class="text-12px text-[#656565]">2 months ago</p>
                    </div>
                    <p class="text-primary text-14px font-semibold hover:underline cursor-pointer mt-2">See all</p>
                </div>
            </template>
        </content-component>
    </div>
</template>

<script setup lang="ts">
    import ContentComponent from '@/components/review/Content.vue'
    import ProgressBar from 'primevue/progressbar';
    import RatingComponent from '@/components/Rating.vue'

    import { ref } from 'vue';


    // CREATE DATA

    const ratingValueList = ref([
        {id:5, value:  32},
        {id:4, value:  20},
        {id:3, value:  36},
        {id:2, value:  0},
        {id:1, value:  12},
    ])


</script>

<style lang="scss">
    .rating-reviews{
        .p-progressbar{
            background: #F8E6CA;
            border-radius: 50px;
        }
        .p-progressbar-value{
            background: #E57220;
            border-radius: 50px;
        }
    }
</style>