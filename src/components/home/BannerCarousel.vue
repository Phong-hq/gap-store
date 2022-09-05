<template>
    <div class="banner-carousel">
        <div class=" px-0 sm:px-5 relative w-full h-[160px] sm:h-[25.1vw] full-image">
            <div class="px-0 sm:px-5 w-full h-full absolute top-0 left-0 image" v-for="(item2, index2) in bannerList2" :key="index2" :class="item2.active ? 'fade-in' : 'fade-out'">
                <div class="w-full h-full relative">
                    <img class="w-full h-full"  :src="item2.itemImageSrc" alt="">
                    <div class="w-full h-full absolute top-0 left-0 background"></div>
                </div>
            </div>
        </div>
        <div class="px-5 flex-center">
            <swiper
                :slidesPerView="slidePerView"
                :spaceBetween="slidePerView == 4 ? 12 : 7"
                :slidesPerGroup="1"
                :loop="true"
                :key="swiperKey"
                :loopFillGroupWithBlank="false"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                @sliderMove="slideMove()"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide 
                    class="slide" v-for="(item, i) in bannerList" 
                    :key="i" 
                    @click="clickSlide(i)" 
                    @mouseover="pauseSlide(), item.scale = true"
                    @mouseleave="startSlide(), item.scale = false"
                    >
                    <div class="image" :class="{'active' : item.active || item.scale }">
                        <img  :src="item.itemImageSrc" alt="">
                    </div>
                    <div class="slide-border" :class="{'active' : item.active}">
                        <!-- <ProgressBar :value="value1" :showValue="false" /> -->
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref, onMounted, onUnmounted, computed, nextTick  } from 'vue'

    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Pagination, Navigation } from "swiper";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";

    import Banner1 from '@/assets/images/home/banner-1.jpg'
    import ProgressBar from 'primevue/progressbar';

    onMounted(() => {
        resize();
        window.addEventListener("resize", resize);
        setTimeout(()=>{
            swiperKey.value++
        },100);
    })

    onUnmounted(() => {
        window.removeEventListener("resize", resize);
    });
 

    
    
    // CREATE DATA  
    
    const OnSwiper = ref<any>(null);
    const bannerList = ref([
        {   
            id: 0,
            itemImageSrc: Banner1,
            active: false,
            alt: "Description for Image 8",
            title: "Title 8",
            scale: false
        },
        {
            id: 1,
            itemImageSrc: 'https://canvas-cdn-prod.azureedge.net/assets/dc/ad/dcad9dcd-8442-4fed-a668-a33d21670daf.png?n=Python.png',
            active: false,
            alt: "Description for Image 8",
            title: "Title 8",
            scale: false
        },
        {
            id: 2,
            itemImageSrc: 'https://canvas-cdn-prod.azureedge.net/assets/ff/ee/ffeecab1-d8af-438a-8526-e70be9ce27c1.jpg?n=BestEntertainmentApps-WW-Tile-3840x2160-W11-02.jpg',
            active: false,
            alt: "Description for Image 8",
            title: "Title 8",
            scale: false
        },
        {
            id: 3,
            itemImageSrc: 'https://canvas-cdn-prod.azureedge.net/assets/dc/ad/dcad9dcd-8442-4fed-a668-a33d21670daf.png?n=Python.png',
            active: false,
            alt: "Description for Image 8",
            title: "Title 8",
            scale: false
        },
        {
            id: 4,
            itemImageSrc: 'https://canvas-cdn-prod.azureedge.net/assets/ff/ee/ffeecab1-d8af-438a-8526-e70be9ce27c1.jpg?n=BestEntertainmentApps-WW-Tile-3840x2160-W11-02.jpg',
            active: false,
            alt: "Description for Image 8",
            title: "Title 8",
            scale: false
        },
    ]);
    const bannerList2 = ref<any[]>([]);
    const modules = ref([Autoplay]);
    const activeImageID = ref(0);
    const activeImageIndexSwiper = ref();
    const activeImageIDSwiperPast = ref();
    const slidePerView = ref(4);
    const swiperKey = ref(0);
    // const value1 = ref(0);

    const disabledClick = ref(false);
    const remaining = ref(4000);
    const startTime = ref<any>(null);
    const startTime2 = ref<any>(null);
    const timeFunction = ref<any>(null);
    const isTiming = ref(false);


                
    const length = computed(() => bannerList.value.length);
    const nextIndex = computed(() => activeImageID.value + 1 < length.value ? activeImageID.value + 1 : 0 )
    const activeImageIDSwiper = computed(() => {
            let result = 0
            result = (activeImageIndexSwiper.value - slidePerView.value)
            result = result < 0 ? length.value + result : result
            result = result % length.value
            return result
        }
    );
    const imageEndId = computed(() => {
        let num = slidePerView.value - (length.value - activeImageIDSwiper.value + 1)
        num = num < 0 ? length.value + num : num
        return num
    });

            
    // CREATE FUNCTION

    const clickSlide = (index:number) => {
        console.log(OnSwiper.value.activeIndex, 'clicked index');
        // console.log(activeImageID.value, 'activeImageID.value');
        // console.log(OnSwiper.value.isEnd);
        // let clickedIndex = OnSwiper.value.clickedIndex
        // if(clickedIndex >= 10){
        //     OnSwiper.value.slideNext()
        // }
        // else{
        //     OnSwiper.value.slideTo(clickedIndex, 500, false)
        // }
        // activeImageID.value = OnSwiper.value.activeIndex
        setBrandListActive(index)
        // resetActiveClass();
        // // console.log(index,'vajv');
        
        // bannerList.value[index].active = true 
        // activeImageID.value = index

        // console.log((activeImageIndexSwiper.value - 4));
        

        // if(OnSwiper.value.activeIndex > 8){
        //     OnSwiper.value.slideNext()
        // }
        // else{
        //     OnSwiper.value.slideTo(index, 500, true)
        // }
        // console.log(OnSwiper.value.clickedIndex,'qqqqqqqqqqqqq');
    };

    const onSwiper = (swiper:any) => {
        OnSwiper.value = swiper
        
        let index = OnSwiper.value.activeIndex - slidePerView.value
        activeImageIndexSwiper.value = OnSwiper.value.activeIndex
        activeImageIDSwiperPast.value = activeImageIDSwiper.value
        setBrandListActive(index)
    };

    const onSlideChange = () => {
        // console.log('11',activeImageID.value);
        // console.log('22',activeImageIDSwiper.value);
        // isActiveImageEnd()
        
        
        
        
        if(OnSwiper.value){
            activeImageIndexSwiper.value = OnSwiper.value.activeIndex
            // clearTimeout(timeFunction.value)
            remaining.value = 4000
            startSlide()
        }
        // console.log('33',activeImageIDSwiper.value);
        // console.log('11',activeImageID.value);
        // test()

        if(!isActiveImageInSide()){
            // activeImageID.value = activeImageIDSwiper.value
            // console.log(activeImageIDSwiper.value);
            setBrandListActive(activeImageIDSwiper.value)
        }
        activeImageIDSwiperPast.value = activeImageIDSwiper.value
        // console.log('curen',activeImageIDSwiper.value);
        // if(OnSwiper.value){
        //     activeImageID.value = OnSwiper.value.activeIndex
        // }
        // console.log('slide change');
        // if(OnSwiper.value){

        // console.log(activeImageID.value)
        // }
        // setTimeout(() => {
        //     startTime2.value = new Date()
        //     let sasd = startTime.value - startTime2.value
        //     console.log(sasd);
        // }, 2000);
        

    };

    const resize = () => {
        // console.log(window.innerWidth);
        slidePerView.value = 4
        let root = document.documentElement;
        root.style.setProperty("--slide-per-view", "4");
        if(window.innerWidth <= 640){
        slidePerView.value = 3
        root.style.setProperty("--slide-per-view", "3");
        }
        // else {
        //     slidePerView.value = 4
        // }

    };

     const resetActiveClass = () => {
        if(bannerList2.value.length){
            bannerList2.value.forEach( ( item, index ) => {
                bannerList2.value[index].active = false
            })
        }
    };

     const slideMove = () => {
        activeImageIDSwiperPast.value = activeImageIDSwiper.value
        
    };

      const setBrandListActive = (index: number) => {
        // console.log(activeImageIndexSwiper.value);
        // console.log(activeImageIDSwiper.value);
        
        if(index >= 0 && index < length.value && !disabledClick.value){
            // console.log(index);
            
            resetActiveClass();
            bannerList2.value.unshift(bannerList.value[index])
            activeImageID.value = index
            bannerList2.value[0].active = true 
            disabledClick.value = true
            setTimeout(() =>{
                if(bannerList2.value.length >= 2){
                    bannerList2.value.splice(1, 1)
                }
                disabledClick.value = false
                // console.log(bannerList2.value);
            },500)
        }
        
    };
    const isActiveImageInSide = () => {
        let result = false
        let num = slidePerView.value - (length.value - activeImageIDSwiper.value + 1)
        num = num < 0 ? length.value + num : num
        let arr = []
        for(let i = 0; i < slidePerView.value - 1; i++){
            let arrItem = num - i < 0 ? length.value + num - i : num - i
            arr.push(arrItem)
        }
        if(arr.includes(activeImageID.value)){
            result = true
        }
        return result
    };

    // const isActiveImageEnd = () => {
    //     let num = slidePerView.value - (length.value - activeImageIDSwiper.value)
    //     num = num < 0 ? length.value + num : num
    //     console.log(num,'asdasds');
        
    // }

    const startSlide = async () => {
        clearTimeout(timeFunction.value)
        if(!isTiming.value){
            console.log('startSlide',remaining.value);
            // isTiming.value = true
            startTime.value = new Date()
            timeFunction.value = setTimeout(async () => {
            // console.log('startSlide222');

                // startTime2.value = new Date()
                // let sasd = startTime.value - startTime2.value
                // OnSwiper.value.slideNext()
                selectNextSlide()
                await nextTick()
                isTiming.value = false
            }, remaining.value);
        }
    };

    const pauseSlide = () => {
        startTime2.value = new Date()
        // console.log('pauseSlide',startTime2.value - startTime.value);
        remaining.value = remaining.value - (startTime2.value - startTime.value) >= 0 ? remaining.value - (startTime2.value - startTime.value) : 0
        clearTimeout(timeFunction.value)
    };

    const selectNextSlide = () => {
        if(imageEndId.value == activeImageID.value){
            OnSwiper.value.slideNext()
            setTimeout(() => {
                setBrandListActive(nextIndex.value)
            }, 50)
        }
        else{
            remaining.value = 4000
            startSlide()
            setBrandListActive(nextIndex.value)
        }
    }




</script>

<style lang="scss">
    @import '@/style/home/banner-carousel.scss';
</style>