### OnlinePythonTutor 学习实践
- 从其中提取出用于javascript的可视化模块

- 用法：`sh get_trace_content.sh 文件名`
  - 如：`sh get_trace_content.sh test_demo\data-types.js`
  - 如果不能正常运行，可以根据报错信息安装缺失库，或者将`get_trace_content.sh`中的命令拆解开一步一步执行

- 运行环境：node v8.9.4

- 文件介绍：

  - js/pytutor.js：前端核心代码

  - jslogger.js：后端核心代码

  - test-trace.js：用于记录后端生成的trace结果，其结构为`var trace = {后端生成结果};`

  - demo.html：可视化网页

  - get_trace_content.sh：封装脚本，其内容为：

    ```shell
    # 对指定js文件进行分析，生成trace结果
    node  jslogger.js --prettydump=true $1 --jsfile=test-trace.js 
    # 打印信息
    echo "You can open demo.html for details!"
    # 尝试打开网页，win10下用start打开文件，如果失败可以手动打开
    start demo.html
    ```

  - 使用方法为`sh get_trace_content.sh test_demo\data-types.js`
