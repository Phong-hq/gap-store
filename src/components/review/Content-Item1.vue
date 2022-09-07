<template>
    <div class="mb-[10px] screen-shorts">
        <content-component :title="'Screenshorts'" :title-button="true" @handel-title-button="handelZoom">
            <template #content>
                <div class="w-full">
                    <swiper
                        :slidesPerView="2.5"
                        :spaceBetween="14"
                        :slidesPerGroup="1"
                        :key="swiperKey"
                        :loopFillGroupWithBlank="false"
                        @swiper="onSwiper"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper"
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }"
                        >
                        <swiper-slide 
                            class="slide" v-for="(item, i) in imageList" 
                            :key="i" 
                            >
                            <div class="swiper-zoom-container">
                                <img class="" :src="item.image" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="overlay" :class="zoom ? 'opacity-1 duration-200': 'pointer-events-none opacity-0 delay-100'">
                    <div class="flex-center w-full h-full relative">
                        <div class="absolute top-0 right-0 w-[40px] h-[40px] rounded-[50%] flex-center hover:bg-[#706d6d8c] duration-100 cursor-pointer m-8 z-50" @click="zoom = false" >
                            <img src="@/assets/images/x-circle.svg" alt="">

                        </div>
                        <swiper
                            :key="swiperKey"
                            :loopFillGroupWithBlank="false"
                            @swiper="onSwiper"
                            :navigation="true"
                            :pagination="{
                                clickable: true,
                            }"
                            :zoom="true"
                            :modules="modules"
                            class="mySwiper zoom"
                            :style="{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }"
                            >
                            <swiper-slide 
                                class="slide" v-for="(item, i) in imageList" 
                                :key="i" 
                                >
                                <div class="swiper-zoom-container">
                                    <img class="" :src="item.image" alt="">
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </template>
        </content-component>
    </div>
</template>

<script setup lang="ts">
    import ContentComponent from '@/components/review/Content.vue'

    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Zoom, Pagination, Navigation } from "swiper";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import "swiper/css/zoom";

    import { ref } from 'vue';

    // CREATE DATA

    const OnSwiper = ref<any>(null);
    const modules = ref([Navigation, Zoom, Pagination]);
    const swiperKey = ref(0);
    const imageList = ref([
        {id: 0, image: 'https://cdn.popsww.com/blog/sites/2/2021/12/nhan-vat-trong-phim-thanh-guom-diet-quy.jpg'},
        {id: 1, image: 'https://image.lag.vn/upload/news/19/10/22/Tokito_Muichiro_IZKT.jpg'},
        {id: 2, image: 'https://upload.motgame.vn/photos/motgame-vn/2022/05/nhung-tru-cot-trong-thanh-guom-diet-quy_8.jpg'},
        {id: 3, image: 'https://genk.mediacdn.vn/2019/10/11/photo-1-15708123995991462537285.jpg'},
    ]);
    const zoom = ref(false);

    // CREATE FUNCTION

    const onSwiper = (swiper:any) => {
        OnSwiper.value = swiper
    };

    const handelZoom = () => {
        zoom.value = true
    }
</script>

<style lang="scss">
    .screen-shorts{
        background: #FFFFFF;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px 0px 0px 8px;
        .title{
            height: 42px;
            border-bottom: 1px solid #E2E2E2;
        }
        .mySwiper{
            width: 100%;
            .slide{
                img{
                    height: 154px;
                    width: 100%;
                    border-radius: 8px;
                    pointer-events: none;
                }
            }
            .swiper-button-prev, .swiper-button-next{
                opacity: 0;
                width: 20px;
                background-color: #fff;
                border-radius: 5px;
                transition-delay: .1s;
                transition:  0.2s;
                &::after{
                    content: "";
                    background-image: url(/src/assets/images/vector.svg);
                    background-size: cover;
                    width: 8px;
                    height: 12px;
                }
                &.swiper-button-disabled{
                    opacity: 0.5 !important;
                }
            }
            .swiper-button-prev{
                transform: translateX(-4px);
                &::after{
                    transform: rotate(180deg);
                }
            }
            .swiper-button-next{
                transform: translateX(4px);
            }
            &:hover{
                .swiper-button-prev, .swiper-button-next{
                    opacity: 1;
                    transform: translateX(0);
                }
            }
                &.zoom{
                    .slide{
                        img{
                            height: unset !important;
                            width: 80vw !important;
                        }
                }
            }
        }
        .overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000080;
            z-index: 50;
        }
        @media (min-width: 1025px) {
            .mySwiper{
                .slide{
                    img{
                        height: 310px;
                    }
                }
            }
        }
        img{
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    }
</style>