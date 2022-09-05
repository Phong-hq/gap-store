<template>
    <header class="header h-[120px] sm:h-[66px] sticky top-0 z-[50] flex justify-between items-center flex-col bg-primary py-4 px-5">
        <div class="w-full flex justify-between items-center">
            <div class="flex items-center">
                <img class="mr-5" src="@/assets/images/layout/header-icon-1.svg" alt="">
                <p class="text-white text-lg font-medium">GAP Store</p>
            </div>
            <div class=" hidden sm:block relative search">
                <input class="input w-[440px] h-[34px] pl-9" type="text" placeholder="Search ...">
                <img class="absolute bottom-1/2 left-0 translate-y-1/2 ml-2" src="@/assets/images/layout/search.svg" alt="">
    
            </div>
            <div class="flex items-center">
                <div class="relative mr-3 bell">
                    <img class="" src="@/assets/images/layout/bell.svg" alt="">
                    <div class="w-[14px] h-[14px] flex-center bg-danger text-white text-10px font-semibold rounded-[50%] absolute notify">
                        1
                    </div>
                </div>
                    <p class="text-lg font-medium hidden sm:block text-white mr-4">Toan Nguyen</p>
                    <div class="w-7 h-7 bg-[#E0E0E0] flex-center rounded-[50%] avatar">
                        <img src="@/assets/images/layout/user.svg" alt="">
                    </div>
    
            </div>
        </div>
        <div class="w-full relative search block sm:hidden">
            <input class="input w-full h-[34px] pl-9" type="text" placeholder="Search ...">
            <img class="absolute bottom-1/2 left-0 translate-y-1/2 ml-2" src="@/assets/images/layout/search.svg" alt="">
        </div>
    </header>
</template>

<style lang="scss">
    .header{
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
        .notify{
            top: -5px;
            right: -5px;
        }
        .search{
            input{
                border-radius: 50px;
            }
            @media (max-width: 900px) and (min-width: 641px) {
                .input{
                    width: 300px;
                }
            }
        }
    }
</style>