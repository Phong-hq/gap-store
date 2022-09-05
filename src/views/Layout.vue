<template>
    <header-component />
    <div class="flex flex-col relative grow">
        <menu-component />
        <div class=" pl-0 sm:pl-[60px] w-100%">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '@/components/layout/Header.vue';
    import MenuComponent from '@/components/layout/Menu.vue';

</script>

