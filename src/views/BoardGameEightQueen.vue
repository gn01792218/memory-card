<template>
    <main class="w-full text-white text-center">
        <header class="mb-5">
            <p class="text-gray-300">
                遊戲方式 : 請將所有皇后放進棋盤中，並且每個皇后都不能互相攻擊<br>
                PS.皇后的攻擊範圍是米字型
            </p>
        </header>
        <section class="mb-5">
            <div class="mb-2">
                <label class="mr-2">選擇棋盤Size</label>
                <select class="text-black" v-model="boardSelectData.borderSize">
                    <option
                        v-for="option in boardSelectData.options" :key="option.value"
                        :value="option.value"
                    >{{ option.text }}</option>
                </select>
            </div>
            <div>
                <span class="text-gray-400 mr-2">是否開啟提示?</span>
                
                <input type="radio" id="openHint" :value="true" v-model="openHint">
                <label class="mr-2" for="openHint">是</label>
                <input type="radio" id="openHint" :value="false" v-model="openHint">
                <label for="openHint">否</label>
                <p v-if="openHint" class="text-orange-300">提示的是該位置皇后的攻擊範圍，在其攻擊範圍內，不應有其他皇后</p>
                <p v-if="openHint" class="text-orange-300">若攻擊範圍內有其他皇后，則不應該將皇后放在該位置上</p>
            </div>
        </section>
        <Board :size="boardSelectData.borderSize" :open-hint="openHint"/>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Board from '@/components/BoardGame/Board.vue'
const boardMinSize = 4
const boardMaxSize = 8
const boardSelectData = ref({
    borderSize:8, //選中的值
    options:[
        { text:'4 X 4', value:4 },
        { text:'5 X 5', value:5 },
        { text:'6 X 6', value:6 },
        { text:'7 X 7', value:7 },
        { text:'8 X 8', value:8 },
    ]
})
const openHint = ref(false)


</script>