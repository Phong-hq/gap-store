<template>
    <div class="w-full flex-center px-5 app-list-2">
        <div class="flex justify-between py-5 items-center background">
            <div class="px-9 w-[70%] sm:w-[unset] sm:h-[unset]">
                <p class="text-xl font-semibold">Essential Apps</p>
                <p class="text-14px text-[#313131]">Take your GAP experience to new heights with these must-have apps</p>
                <Button class="bg-[#FFFFFF20] hover:bg-[#FFFFFF30]  w-[130px] h-[34px] mt-6" label="See all" v-ripple />

            </div>
            <div class="flex  list">
                <app-item-component v-for="i in itemShow" :key="i" v-if="itemShow > 0" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    import AppItemComponent from '@/components/home/AppItem.vue'
    import Button from 'primevue/button';

    onMounted(() => {
        resize();
        window.addEventListener("resize", resize);
    })

    onUnmounted(() => {
        window.removeEventListener("resize", resize);
    });

    // CREATE DATA  

    const itemShow = ref(3);

    // CREATE FUNCTION
    const resize = () => {
        // console.log(window.innerWidth);
        itemShow.value = 3
        if(window.innerWidth > 640 && window.innerWidth <= 980){
            itemShow.value = 2
            console.log(window.innerWidth);
        }
        else if(window.innerWidth <= 640){
            itemShow.value = 0
        }
        console.log(itemShow.value);
        
        // else {
        //     slidePerView.value = 4
        // }

    };
</script>

<style lang="scss">
    .app-list-2{
        .background{            
            background: #FFFFFF;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            width: 100%;
            min-height: 220px;
        }
    }
</style>