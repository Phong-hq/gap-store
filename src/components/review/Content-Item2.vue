<template>
    <div class="mb-[10px] description">
        <content-component :title="'Description'">
            <template #content>
                <div class="w-full">
                    <p class="text-14px">Netflix has something for everyone. Watch TV shows and movies recommended just for you, including award-winning Netflix original series, movies, 
                        and documentaries. There’s even a safe watching experience just for kids with family-friendly entertainment.</p>
                    <br class="leading-14px" />
                    <p class="text-14px">Now on Windows, you can enjoy every detail of the world’s favorite shows in 4K Ultra HD on Netflix..</p>
                    <p class="text-primary text-14px font-semibold hover:underline cursor-pointer mt-8">Show more</p>
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