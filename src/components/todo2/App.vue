<template>
    <v-container>
        <v-layout row>
            <v-flex>
                <List/>
            </v-flex>
            <v-flex>
                <Input/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import List from './List'
    import Input from './Create'

    export default {
        components: {
            List,
            Input
        },
    }
</script>
