<template>
    <div class="mb-[10px] requirements">
        <content-component :title="'System Requirements'">
            <template #content>
                <div class="w-full">
                    <div class="flex items-center">
                        <img class="mr-[6px]" src="@/assets/images/success-icon.png" alt="">
                        <p class="text-14px">This product should work on your device. Items with a checkmark meet the developer's system requirements.</p>
                    </div>
                    <p class="text-primary text-14px font-semibold hover:underline cursor-pointer mt-2">Show more</p>
                </div>
            </template>
        </content-component>
    </div>
</template>

<script setup lang="ts">
    import ContentComponent from '@/components/review/Content.vue'
</script>

<style lang="scss">
</style>