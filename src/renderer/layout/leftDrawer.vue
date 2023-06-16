<template>
    <v-navigation-drawer expand-on-hover color="blue" rail :order="1">
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/50.jpg" title="niko t"
                subtitle="welcome！"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'></style>