<template>
    <v-app>
        <v-content>
            <TodoTwo/>
        </v-content>
        <v-content>
            <DisplayTwo/>
        </v-content>
    </v-app>
</template>

<script>
    import TodoTwo from './components/todo2/App'
    import DisplayTwo from './components/display2/App'

    export default {
        name: 'App',
        components: {
            TodoTwo,
            DisplayTwo
        },
    }
</script>
