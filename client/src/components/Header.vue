<template>
    <header class="header-nav">
        <el-row>
            <el-col :span='6' class="logo-container">
                <span>kkkkk</span>
                <div class="collapse-btn" @click="collapseChage">
                    <i class="el-icon-menu icon-btn"></i>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
export default {
    name: "header-nav",
    data(){
        return{

        }
    },
    methods: {
        collapseChage(){

        }
    }
}
</script>

