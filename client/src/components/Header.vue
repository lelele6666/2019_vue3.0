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
                    <!-- 全屏显示 -->
                    <div class="btn-fullscreen" @click="handleFullScreen">
                        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                        </el-tooltip>
                    </div>
                    <img class="avatar" src="../assets/person.png">
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{users.name}}</p>
                    </div>
                    <span class="username">
                        <el-dropdown trigger="click" @command="setDialogInfo">
                            <span class="el-dropdown-link">
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import Transmit from '@/common/transmit'
import { mapState } from 'vuex';
export default {
    name: "header-nav",
    data(){
        return{
            collapse: false,           //菜单栏是否闭合
            icon:'el-icon-s-fold icon-btn',
            clickNum:0,                //左侧菜单栏上面的按钮的展示
            fullscreen:false           //是否全屏展示
        }
    },
    computed: {
            ...mapState({
                users: state => state.user
            })
    },
    methods: {
        setDialogInfo(cmditem) {
            switch (cmditem) {
                case "info":
                this.showInfoList();
                break;
                case "logout":
                this.logout();
                break;
            }
        },

        showInfoList(){

        },

        logout(){
            //路由跳转
            this.$router.push("/login");
        },
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

        },
        //是否全屏展示
         handleFullScreen() {
            //获取到整个html
            let element = document.documentElement;
            // console.log(element)
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
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

.el-dropdown {
  color: #fff;
}

.username{
    cursor: pointer;
    margin-right: 5px;
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

.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}

.name {
  line-height: 8px;
  text-align: center;
  font-size: 14px;
}

.comename {
  font-size: 12px;
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

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
</style>


