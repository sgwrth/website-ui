<script setup lang="ts">
const postConnectFour = usePostConnectFour()

const gameData = ref()
const board: Ref<Array<Array<string>>> = ref([
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'X', ' ', ' ', ' '],
])

function convertBoardSymbol(symbol: string): string {
    switch (symbol) {
    case ' ':
        return '_'
    case 'X':
        return 'F'
    case 'O':
        return 'B'
    default:
        return '?'
    }
}

function makeMove(col: number) {
    console.log(`move col ${col}`)
}

onMounted(async () => {
    gameData.value = await postConnectFour({'message': 'hi'})
    board.value = gameData.value.board
    console.log(board.value)
})
</script>

<template>
    <div class="main">
        <div class="header">
            Connect Four
        </div>

        <div class="board">
            <div class="col1" v-on:click="makeMove(1)">
                <div class="cell">{{ convertBoardSymbol(board[0][0]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][0]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][0]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][0]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][0]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][0]) }}</div>
            </div>
            <div class="col2" v-on:click="makeMove(2)">
                <div class="cell">{{ convertBoardSymbol(board[0][1]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][1]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][1]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][1]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][1]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][1]) }}</div>
            </div>
            <div class="col3" v-on:click="makeMove(3)">
                <div class="cell">{{ convertBoardSymbol(board[0][2]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][2]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][2]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][2]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][2]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][2]) }}</div>
            </div>
            <div class="col4" v-on:click="makeMove(4)">
                <div class="cell">{{ convertBoardSymbol(board[0][3]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][3]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][3]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][3]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][3]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][3]) }}</div>
            </div>
            <div class="col5" v-on:click="makeMove(5)">
                <div class="cell">{{ convertBoardSymbol(board[0][4]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][4]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][4]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][4]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][4]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][4]) }}</div>
            </div>
            <div class="col6" v-on:click="makeMove(6)">
                <div class="cell">{{ convertBoardSymbol(board[0][5]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][5]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][5]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][5]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][5]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][5]) }}</div>
            </div>
            <div class="col7" v-on:click="makeMove(7)">
                <div class="cell">{{ convertBoardSymbol(board[0][6]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[1][6]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[2][6]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[3][6]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[4][6]) }}</div>
                <div class="cell">{{ convertBoardSymbol(board[5][6]) }}</div>
            </div>
        </div>

        <!--
        <div class="board">
            <div class="cell col1">{{ convertBoardSymbol(board[0][0]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[0][1]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[0][2]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[0][3]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[0][4]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[0][5]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[0][6]) }}</div>
            <div class="cell col1">{{ convertBoardSymbol(board[1][0]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[1][0]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[1][1]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[1][2]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[1][3]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[1][4]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[1][5]) }}</div>
            <div class="cell col1">{{ convertBoardSymbol(board[2][6]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[2][1]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[2][2]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[2][3]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[2][4]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[2][5]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[2][6]) }}</div>
            <div class="cell col1">{{ convertBoardSymbol(board[3][1]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[3][2]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[3][3]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[3][4]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[3][5]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[3][6]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[3][0]) }}</div>
            <div class="cell col1">{{ convertBoardSymbol(board[4][0]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[4][1]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[4][2]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[4][3]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[4][4]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[4][5]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[4][6]) }}</div>
            <div class="cell col1">{{ convertBoardSymbol(board[5][0]) }}</div>
            <div class="cell col2">{{ convertBoardSymbol(board[5][1]) }}</div>
            <div class="cell col3">{{ convertBoardSymbol(board[5][2]) }}</div>
            <div class="cell col4">{{ convertBoardSymbol(board[5][3]) }}</div>
            <div class="cell col5">{{ convertBoardSymbol(board[5][4]) }}</div>
            <div class="cell col6">{{ convertBoardSymbol(board[5][5]) }}</div>
            <div class="cell col7">{{ convertBoardSymbol(board[5][6]) }}</div>
        </div>
        -->

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
