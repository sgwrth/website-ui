<script setup lang="ts">
const postConnectFour = usePostConnectFour()

const gameData = ref()
const board: Ref<Array<Array<string>>> = ref([
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
])

function convertBoardSymbol(symbol: string): string {
    switch (symbol) {
    case ' ':
        return ' '
    case 'X':
        return 'X'
    case 'O':
        return 'O'
    default:
        return '?'
    }
}

async function makeMove(col: number) {
    gameData.value.move = col
    gameData.value = await postConnectFour(gameData.value)
    console.log(gameData.value)
    board.value = gameData.value.board
}

onMounted(async () => {
    gameData.value = await postConnectFour({'message': 'hi'})
    board.value = gameData.value.board
})
</script>

<template>
    <div class="main">
        <div class="header">
            Connect Four
        </div>

        <div class="board">

            <!-- Loop is 1-indexed, hence the '[i - 1]'. -->
            <div class="col1" v-on:click="makeMove(0)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][0]) }}
                </div>
            </div>
            <div class="col2" v-on:click="makeMove(1)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][1]) }}
                </div>
            </div>
            <div class="col3" v-on:click="makeMove(2)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][2]) }}
                </div>
            </div>
            <div class="col4" v-on:click="makeMove(3)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][3]) }}
                </div>
            </div>
            <div class="col5" v-on:click="makeMove(4)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][4]) }}
                </div>
            </div>
            <div class="col6" v-on:click="makeMove(5)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][5]) }}
                </div>
            </div>
            <div class="col7" v-on:click="makeMove(6)">
                <div v-for="i in 6" :key="i" class="cell">
                    {{ convertBoardSymbol(board[i - 1][6]) }}
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.board {
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 6fr;
}
.cell {
    border: solid 1px #333;
    text-align: center;
    align-items: center;
    height: 1.5rem;
}
.col1:hover {
    background-color: #300000;
    cursor: pointer;
}
.col2:hover {
    background-color: #300000;
    cursor: pointer;
}
.col3:hover {
    background-color: #300000;
    cursor: pointer;
}
.col4:hover {
    background-color: #300000;
    cursor: pointer;
}
.col5:hover {
    background-color: #300000;
    cursor: pointer;
}
.col6:hover {
    background-color: #300000;
    cursor: pointer;
}
.col7:hover {
    background-color: #300000;
    cursor: pointer;
}
</style>
