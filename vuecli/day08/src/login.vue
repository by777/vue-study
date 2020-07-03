<!--
 * @Author: Xu Bai
 * @Date: 2020-07-03 15:20:05
 * @LastEditors: Xu Bai
 * @LastEditTime: 2020-07-03 21:55:23
--> 
<template>
    <div>
            <h1>这是login.vue,{{msg}}</h1>
            <router-link to="/account">account</router-link>
            <router-link to="/goodslist">goodslist</router-link>
            <router-view ></router-view>
    </div>
</template>
<script>
    // export default向外暴露成员、export default只允许向外暴露一次
    // export var tittle='11'也可以向外暴露、只能使用{}来import接收、
    // 但是即使暴露也是按接收需要才导出\要名称一致
    export default{
        data(){
            // 注意组件中的data必须是function
            return {msg:"hello"}
        },
        methods: {
            show(){
                console.log("okkkk");
            }
        },
    };



</script>
<style>

</style>