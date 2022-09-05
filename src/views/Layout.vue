<template>
    <header-component />
    <div class="h-full flex flex-col relative grow">
        <menu-component />
        <div class=" pl-0 sm:pl-[60px] bg-[#f5f5f5] w-full grow">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '@/components/layout/Header.vue';
    import MenuComponent from '@/components/layout/Menu.vue';

</script>

