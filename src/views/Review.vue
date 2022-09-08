<template>
    <div class="bg-[#F5F5F5] flex h-full pt-[10px] pb-14 rewview">
        <div class="mx-[10px] left hidden sm:block">
            <left-content-component />
        </div>
        <div class="grow right px-[10px] sm:px-0">
            <left-content-component class="block sm:hidden" />
            <content-item1-component />
            <content-item2-component />
            <content-item3-component />
            <content-item4-component />
            <content-item5-component />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Button from 'primevue/button';
    import ProgressBar from 'primevue/progressbar';
    import RatingComponent from '@/components/Rating.vue'
    import ContentItem1Component from '@/components/review/Content-Item1.vue';
    import ContentItem2Component from '@/components/review/Content-Item2.vue';
    import ContentItem3Component from '@/components/review/Content-Item3.vue';
    import ContentItem4Component from '@/components/review/Content-Item4.vue';
    import ContentItem5Component from '@/components/review/Content-Item5.vue';
    import LeftContentComponent from '@/components/review/LeftContent.vue';

    import { ref } from 'vue';

    // CREATE DATA

    const OnSwiper = ref<any>(null);

    // CREATE FUNCTION


</script>

<style lang="scss">
    .left{
        width: 21.7vw;
        min-width: 222px;
        max-width: 380px;
        // height: 100%;

        position: relative;
        // .sticky{
        //     top:76px;
        //     height: calc(100vh - 76px);
        //     background-color: #fff;
        //     width: 100%;
        //     min-width: 222px;
        //     max-width: 380px;
        //     overflow: auto;
        //     .entertainment{
        //         button{
        //             box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
                    
                    
        //         }
        //     }
        // }
    }
    .right{
        overflow: hidden;
        // .screen-shorts{
        //     background: #FFFFFF;
        //     box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        //     border-radius: 8px 0px 0px 8px;
        //     .title{
        //         height: 42px;
        //         border-bottom: 1px solid #E2E2E2;
        //     }
        //     .mySwiper{
        //         width: 100%;
        //         .slide{
        //             img{
        //                 height: 154px;
        //                 width: 100%;
        //                 border-radius: 8px;
        //                 pointer-events: none;
        //             }
        //         }
        //         .swiper-button-prev, .swiper-button-next{
        //             opacity: 0;
        //             width: 20px;
        //             background-color: #fff;
        //             border-radius: 5px;
        //             transition-delay: .1s;
        //             transition:  0.2s;
        //             &::after{
        //                 content: "";
        //                 background-image: url(/src/assets/images/vector.svg);
        //                 background-size: cover;
        //                 width: 8px;
        //                 height: 12px;
        //             }
        //             &.swiper-button-disabled{
        //                 opacity: 0.5 !important;
        //             }
        //         }
        //         .swiper-button-prev{
        //             transform: translateX(-4px);
        //             &::after{
        //                 transform: rotate(180deg);
        //             }
        //         }
        //         .swiper-button-next{
        //             transform: translateX(4px);
        //         }
        //         &:hover{
        //             .swiper-button-prev, .swiper-button-next{
        //                 opacity: 1;
        //                 transform: translateX(0);
        //             }
        //         }
        //     }
        //     .overlay{
        //         position: fixed;
        //         top: 0;
        //         left: 0;
        //         width: 100%;
        //         height: 100%;
        //         background-color: #00000080;
        //         z-index: 50;
        //     }
        // }
        // .description{
        //     background: #FFFFFF;
        //     box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        //     border-radius: 8px 0px 0px 8px;
        //     .title{
        //         height: 42px;
        //         border-bottom: 1px solid #E2E2E2;
        //     }
        // }
        // .rating-reviews{
        //     background: #FFFFFF;
        //     box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        //     border-radius: 8px 0px 0px 8px;
        //     .title{
        //         height: 42px;
        //         border-bottom: 1px solid #E2E2E2;
        //     }
        //     .p-progressbar{
        //         background: #F8E6CA;
        //         border-radius: 50px;
        //     }
        //     .p-progressbar-value{
        //         background: #E57220;
        //         border-radius: 50px;
        //     }
        // }
        .requirements{
            background: #FFFFFF;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px 0px 0px 8px;
            .title{
                height: 42px;
                border-bottom: 1px solid #E2E2E2;
            }
        }
        // .information{
        //     background: #FFFFFF;
        //     box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        //     border-radius: 8px 0px 0px 8px;
        //     .title{
        //         height: 42px;
        //         border-bottom: 1px solid #E2E2E2;
        //     }
        //     .text-ellipsis{
        //         display: -webkit-box;
        //         -webkit-line-clamp: 2;
        //         -webkit-box-orient: vertical;  
        //         overflow: hidden;
        //     }
        // }
        @media (min-width: 1025px) {
            .screen-shorts{
                .mySwiper{
                    .slide{
                        img{
                            height: 310px;
                        }
                    }
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
</style>