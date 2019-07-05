const base = {
    login : '/api/user/login',
    typeUrl:'/api/common/platform',
    requestTypeUrl:'/api/common/reqeustType',
    protocolUrl:'/api/common/protocol',
    envUrl:'/api/common/env',
    projectUrl: '/api/project/',
    userUrl:'/api/user/',
    testUrl: '/api/common/testRequest',
    scriptUrl:'/api/script/',
    dubboServer:'/api/dubbo/service',
    dubboTest:'/api/dubboTest',
    historyUrl:'/api/history/',
    reportUrl:'/api/report/',
    generateReportUrl:"/api/common/generateReport",
    logUrl:'/api/common/watchLog',
    execScriptUrl:'/api/common/execScript',
    reportDownload:'/api/common/download',
    taskUrl:"/api/scheduleJob",
    checkCronUrl:"/api/common/checkCron",
    wsUrl : 'ws://127.0.0.1:8000/ws/deploy/tasks/'
}

export default base;