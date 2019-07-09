<template>
    <header class="header-nav">
        <el-row>
            <el-col :span='6' class="logo-container">
                <div class="collapse-btn" @click="collapseChage">
                    <i :class="icon"></i>
                </div>
                <span class="title">后台管理系统</span>
            </el-col>
            <el-col :span='6' class="user">
                <div class="userinfo">
                    <div class="btn-fullscreen icon-font">
                        <el-tooltip class="item" effect="dark" content="跳转到github" placement="bottom">
                        <a href="https://github.com/lelele6666/2019_vue3.0" target="_blank">
                            <i class="iconfont icon-github"></i>
                        </a>
                        </el-tooltip>
                    </div>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import Transmit from '@/common/transmit'
export default {
    name: "header-nav",
    data(){
        return{
            collapse: false, //菜单栏是否闭合
            icon:'el-icon-s-fold icon-btn',
            clickNum:0
        }
    },
    methods: {
        //点击隐藏左侧侧边栏
        collapseChage(){
            this.collapse = true
            this.clickNum = this.clickNum + 1
            if(this.clickNum % 2 === 0){
                this.icon = 'el-icon-s-fold icon-btn' 
            }else{
                this.icon = 'el-icon-s-unfold icon-btn'
            }
            //非父子组件传值
            Transmit.$emit('collapse',this.collapse)
        },
        //锁定屏幕
        handleLockScreen(){

        }
    }
}
</script>

<style lang="scss" scoped>
.header-nav {
    height:50px;
    background: #324057;
    color:#fff;
    overflow: hidden;
    padding: 5px 0;
    border-bottom: 1px solid #1f2d3d;
    line-height: 50px;
}
.collapse-btn {
  width: 50px;
  margin-left: 20px;
  display: inline-block;
}

.icon-btn {
  font-size: 36px;
  vertical-align: middle;
  cursor: pointer;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 50px;
  text-align: right;
  float: right;
  padding-right: 10px;
}

.userinfo {
  display: inline-block;
}

.btn-fullscreen {
  display: inline-block;
  font-size: 24px;
  vertical-align: middle;
  margin-right: 20px;
  transform: rotate(45deg);
  cursor: pointer;
}
.icon-font {
  transform: none;
}

a {
  text-decoration: none;
  color: #fff;
}

.iconfont{
    font-size: 22px;
}
</style>


