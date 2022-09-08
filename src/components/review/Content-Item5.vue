<template>
    <div class="mb-[10px] information">
        <content-component :title="'Additional information'">
            <template #content>
                <div class="w-full">
                    <div class="w-full flex justify-between flex-wrap  mb-1">
                        <div class="w-[135px] lg:w-[160px] mb-8">
                            <p class="text-12px lg:text-14px text-[#656565]">Published by</p>
                            <p class="text-12px lg:text-14px font-semibold text-primary">Netflix, Inc.</p>
                            <p class="text-12px lg:text-14px">1997 - 2018 Netflix, Inc.</p>
                            <br />
                            <p class="text-12px lg:text-14px text-[#656565]">This app can</p>
                        </div>
                        <div class="w-[120px] lg:w-[150px] mb-8">
                            <p class="text-12px lg:text-14px text-[#656565]">Release Date</p>
                            <p class="text-12px lg:text-14px">10/18/2010</p>
                            <br />
                            <br />
                            <p class="text-12px lg:text-14px text-[#656565]">Supported <br /> languages</p>
                        </div>
                        <div class="w-[120px] lg:w-[150px] mb-8">
                            <p class="text-12px lg:text-14px text-[#656565]">Published by</p>
                            <p class="text-12px lg:text-14px font-semibold text-primary">Entertainment</p>
                            <br />
                            <br />
                            <p class="text-12px lg:text-14px text-[#656565]">Publisher <br /> Info</p>
                        </div>
                        <div class="w-[120px] lg:w-[150px] mb-8">
                            <p class="text-12px lg:text-14px text-[#656565]">Approximate size</p>
                            <p class="text-12px lg:text-14px">10.4 MB</p>
                            <br />
                            <br />
                            <p class="text-12px lg:text-14px text-[#656565]">Additional <br /> terms</p>
                        </div>
                        <div class="w-[120px] lg:w-[150px] mb-8">
                            <p class="text-12px lg:text-14px text-[#656565]">Installation</p>
                            <p class="text-12px lg:text-14px text-ellipsis">Get this app white signed in to your ....</p>
                            <br />
                            <p class="text-12px lg:text-14px text-[#656565]">Report this product</p>
                        </div>
                    </div>
                </div>
            </template>
        </content-component>
    </div>
</template>

<script setup lang="ts">
    import ContentComponent from '@/components/review/Content.vue'
</script>

<style lang="scss">
    .information{
        margin-bottom: 0 !important;
        .content{
            margin-bottom: 0 !important;
        }
        .text-ellipsis{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
    }
</style>