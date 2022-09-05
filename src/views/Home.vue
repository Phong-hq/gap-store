<template>
    <div class="bg-[#f5f5f5] home">
        <banner-carousel-component />
        <app-list-component />
        <banner-component />
        <app-list-component />
        <app-list2-component />
        <app-list-component />
    </div>
</template>

<script setup lang="ts">

    import { ref, onMounted, onUnmounted, computed, nextTick  } from 'vue'

    import BannerCarouselComponent from '@/components/home/BannerCarousel.vue'
    import AppListComponent from '@/components/home/AppList.vue'
    import BannerComponent from '@/components/home/Banner.vue'
    import AppList2Component from '@/components/home/AppList2.vue'



    onMounted(() => {
        // resize();
        // window.addEventListener("resize", resize);
        // setTimeout(()=>{
        //     swiperKey.value++
        // },100);
        // startInterval()
    })

    onUnmounted(() => {
        // window.removeEventListener("resize", resize);
    });
 

    

    // CREATE DATA  



    // CREATE FUNCTION



</script>

<style lang="scss">

</style>