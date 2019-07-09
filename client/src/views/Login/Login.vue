<template>
    <div class="form_container" id = 'Login'>
        <div class="manage_tip">
            <span class="title">在线后台管理系统</span>
            <el-form :model="loginUser" :rules="rules" ref="loginForm" class="loginForm" label-width="80px">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
					<el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
				</el-form-item>
				<!-- <div class="info">
					<p>还没有账号,请先<router-link to="/register">注册?</router-link></p>
				</div>	 -->
            </el-form>
        </div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
import isEmpty from '../../common/isEmpty'
export default {
    name:'Login',
    data(){
        return{
            loginUser: {
                email: '',
                password: '',
            },
            rules:{
                email:[
                    { type: 'email',required: true,message: '邮箱格式不正确', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 30, message: '长度在6到30个字符之间', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        //这个是this.$store.state.title的简写形式
        ...mapState({
            count : state => state.count,
            num : state => state.num
        }),
    },
    methods: {
        addFun(){
            //虽然这样我们能够修改state的值，但是官方并不建议我们这么修改，而是每次提交一个action
            this.$store.dispatch('addFun',{})
        },
        ...mapActions(['reduceFun']),
        gotoIndex(){
            this.$router.push('/index')
        },
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if(valid){
                    this.$router.push('/index')
                }
            })
        }
    },

}
</script>

<style lang="scss" scoped>
.form_container{
    position: relative;
    width: 100%;
    height:100%;
    background: url(../../assets/bj.jpg) no-repeat center center;
    background-size: 100% 100%;
}
.manage_tip{
    width: 370px;
    height: 210px;
    position: absolute;
    top:10%;
    left:45%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    margin-left: -185px;
}

.title{
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color: #fff;
}

.loginForm{
    margin-top: 20px;
    background-color: #fff;
    padding: 30px 40px 20px 20px;
    border-radius: 5px;
    box-shadow:  0px 5px 10px #cccccc;
}

.submit_btn {
  width: 100%;
}

.info{
	float: right;
	font-size: 14px;
	color: #606266;
}

a{
	text-decoration: none;
}
</style>


