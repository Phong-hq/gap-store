<template>
    <div class=" app-list">
        <div class="w-full flex justify-between mt-8 mb-4 px-5 title">
            <p class="font-semibold">Top free apps</p>
            <p class="text-14px text-primary cursor-pointer hover:underline">See all</p>
        </div>
        <div class="overflow-hidden">
            <div class="overflow-auto">
                <div class="mb-7 min-w-[964px] sm:min-w-[unset] px-5 list">
                    <div class="" v-for="i in 8" :key="i">
                        <div class="flex justify-between items-center pl-3 py-3 item">
                            <div class="h-full flex flex-col justify-end">
                                <p class="text-[#313131] font-semibold text-14px">GAP Store</p>
                                <p class="text-[#6f6f6f] text-10px">Description</p>
                            </div>
                            <div class="flex-center px-4 image">
                                <img src="@/assets/images/home/free-app.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
    .app-list{
        .list{
            display: grid;
            // grid-template-columns: auto auto auto auto;
            grid-template-columns: repeat(auto-fit, minmax(222px, 1fr));
            gap: 12px;
            // min-width: 1024px;
            // overflow: auto;
            .item{
                height: 112px;
                background: #FFFFFF;
                box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 8px;
                }
            }
        }
        @media (max-width: 639px) {
            // min-width: 1024px;
        }
    }
</style>