<template>
    <div>
        <div id="thought">
            <div class="title">{{ thought.title }}</div>
            <div class="content">{{ thought.content }}</div>
            <div class="date">{{ stampToDate(thought.date) }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Thought',
    props: ['thought'],
    methods: {
        stampToDate: timestamp => {
            const date = new Date(timestamp)
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        }
    }
}
</script>

<style lang="scss" scoped>
#thought {
    display: flex;
    flex-direction: column;
    border: 2px solid #efe1c9;
    background-color: #f97f63;
    color: #ffffff;
    width: 250px;
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    box-shadow

    div {
        margin: 10px 0 10px 0;
    }

    .title {
        text-transform: uppercase;
        font-weight: bold;
    }

    .content {
        padding: 15px 0 15px 0;
    }

    .date {
        font-weight: bold;
    }
}
</style>