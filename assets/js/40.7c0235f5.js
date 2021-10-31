(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{428:function(t,_,v){"use strict";v.r(_);var s=v(44),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"gh-ost"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gh-ost"}},[t._v("#")]),t._v(" gh-ost")]),t._v(" "),v("ul",[v("li",[t._v("内置gh-ost源码("),v("code",[t._v("v1.0.48")]),t._v(")，因此无须下载。")]),t._v(" "),v("li",[t._v("手动终止和暂停及恢复功能已开放相应命令，因此隐藏相关参数。")])]),t._v(" "),v("p",[t._v("####参数设置")]),t._v(" "),v("p",[t._v("gh-ost工具的设置参数可以可以通过"),v("code",[t._v("inception show variables like 'ghost%';")]),t._v("查看")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" variables "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ghost%'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("支持以下方式设置:")]),t._v(" "),v("ul",[v("li",[t._v("1.通过"),v("code",[t._v("inception set")]),t._v("设置")])]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" osc_check_interval "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("ul",[v("li",[t._v("2.配置config.toml,并通过"),v("code",[t._v("-config=config.toml")]),t._v("指定配置文件启动")])]),t._v(" "),v("h4",{attrs:{id:"进程命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程命令"}},[t._v("#")]),t._v(" 进程命令")]),t._v(" "),v("p",[t._v("#####查看osc进程")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception get osc processlist"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("返回结果：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("DBNAME")]),t._v(" "),v("th",[t._v("TABLENAME")]),t._v(" "),v("th",[t._v("COMMAND")]),t._v(" "),v("th",[t._v("SQLSHA1")]),t._v(" "),v("th",[t._v("PERCENT")]),t._v(" "),v("th",[t._v("REMAINTIME")]),t._v(" "),v("th",[t._v("INFOMATION")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("test_inc")]),t._v(" "),v("td",[t._v("t1")]),t._v(" "),v("td",[t._v("alter table t1 add column c33 int")]),t._v(" "),v("td",[t._v("*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F")]),t._v(" "),v("td",[t._v("9")]),t._v(" "),v("td",[t._v("00:36")]),t._v(" "),v("td",[t._v("Copying "),v("code",[t._v("test_inc")]),t._v("."),v("code",[t._v("t1")]),t._v(":   9% 00:36 remain")])])])]),t._v(" "),v("p",[t._v("#####查看指定osc进程")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception get osc_percent "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("返回结果：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("DBNAME")]),t._v(" "),v("th",[t._v("TABLENAME")]),t._v(" "),v("th",[t._v("SQLSHA1")]),t._v(" "),v("th",[t._v("PERCENT")]),t._v(" "),v("th",[t._v("REMAINTIME")]),t._v(" "),v("th",[t._v("INFOMATION")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("test_inc")]),t._v(" "),v("td",[t._v("t1")]),t._v(" "),v("td",[t._v("*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F")]),t._v(" "),v("td",[t._v("49")]),t._v(" "),v("td",[t._v("00:14")]),t._v(" "),v("td",[t._v("Copying "),v("code",[t._v("test_inc")]),t._v("."),v("code",[t._v("t1")]),t._v(":  49% 00:14 remain")])])])]),t._v(" "),v("p",[t._v("#####终止指定osc进程\n"),v("code",[t._v("终止后注意手动清理相关辅助表")])]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("kill")]),t._v(" osc "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或同义词")]),t._v("\ninception stop "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("#####暂停指定osc进程")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception pause osc "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或同义词")]),t._v("\ninception pause "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("#####恢复指定osc进程")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("inception resume osc "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或同义词")]),t._v("\ninception resume "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*E53542EFF4E179BE267210114EC5EDBEF9DC5D8F'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("h3",{attrs:{id:"复用pt-osc参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复用pt-osc参数"}},[t._v("#")]),t._v(" 复用pt-osc参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选范围")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("osc_critical_thread_connected")]),t._v(" "),v("td",[t._v("1000")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("对应参数--critical-load中的thread_connected部分")])]),t._v(" "),v("tr",[v("td",[t._v("osc_critical_thread_running")]),t._v(" "),v("td",[t._v("80")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("对应参数--critical-load中的thread_running部分")])]),t._v(" "),v("tr",[v("td",[t._v("osc_max_thread_connected")]),t._v(" "),v("td",[t._v("1000")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("对应参数--max-load中的thread_connected部分")])]),t._v(" "),v("tr",[v("td",[t._v("osc_max_thread_running")]),t._v(" "),v("td",[t._v("80")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("对应参数--max-load中的thread_running部分")])]),t._v(" "),v("tr",[v("td",[t._v("osc_min_table_size")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v('OSC的开关，如果设置为0，则全部ALTER语句都走OSC，如果设置为非0，则当这个表占用空间大小大于这个值时才使用OSC方式。单位为M，这个表大小的计算方式是通过语句： select (DATA_LENGTH + INDEX_LENGTH)/1024/1024 from information_schema.tables where table_schema = "dbname" and table_name = "tablename"来实现的。')])]),t._v(" "),v("tr",[v("td",[t._v("osc_print_none")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("用来设置在Inception返回结果集中，对于原来OSC在执行过程的标准输出信息是不是要打印到结果集对应的错误信息列中，如果设置为1，就不打印，如果设置为0，就打印。而如果出现错误了，则都会打印")])])])]),t._v(" "),v("h3",{attrs:{id:"参数说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选范围")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ghost_on")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("gh-ost开关")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_aliyun_rds")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("阿里云rds数据库标志")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_allow_master_master")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("允许gh-ost运行在双主复制架构中，一般与-assume-master-host参数一起使用")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_allow_nullable_unique_key")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("允许gh-ost在数据迁移(migrate)依赖的唯一键可以为NULL，默认为不允许为NULL的唯一键。如果数据迁移(migrate)依赖的唯一键允许NULL值，则可能造成数据不正确，请谨慎使用。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_allow_on_master")]),t._v(" "),v("td",[v("code",[t._v("true")])]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("允许gh-ost直接运行在主库上。默认gh-ost连接的"),v("code",[t._v("主库")]),t._v("。"),v("code",[t._v("(暂未添加从库地址的配置)")])])]),t._v(" "),v("tr",[v("td",[t._v("ghost_approve_renamed_columns")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("如果支持修改列名,则需设置此参数为"),v("code",[t._v("true")]),t._v(",否则gh-ost不会执行。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_assume_master_host")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('为gh-ost指定一个主库，格式为"ip:port"或者"hostname:port"。默认推荐gh-ost连接从库。')])]),t._v(" "),v("tr",[v("td",[t._v("ghost_assume_rbr")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("确认gh-ost连接的数据库实例的binlog_format=ROW的情况下，可以指定-assume-rbr，这样可以禁止从库上运行stop slave,start slave,执行gh-ost用户也不需要SUPER权限。"),v("code",[t._v("为避免影响生产数据库，此参数建议置为true")])])]),t._v(" "),v("tr",[v("td",[t._v("ghost_chunk_size")]),t._v(" "),v("td",[t._v("1000")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("在每次迭代中处理的行数量(允许范围：100-100000)，默认值为1000。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_concurrent_rowcount")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("该参数如果为True(默认值)，则进行row-copy之后，估算统计行数(使用explain select count(*)方式)，并调整ETA时间，否则，gh-ost首先预估统计行数，然后开始row-copy。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_critical_load_hibernate_seconds")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("负载达到critical-load时，gh-ost在指定的时间内进入休眠状态。 它不会读/写任何来自任何服务器的任何内容。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_critical_load_interval_millis")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("当值为0时，当达到-critical-load，gh-ost立即退出。当值不为0时，当达到-critical-load，gh-ost会在-critical-load-interval-millis秒数后，再次进行检查，再次检查依旧达到-critical-load，gh-ost将会退出。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_cut_over")]),t._v(" "),v("td",[t._v("atomic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("选择cut-over类型:atomic/two-step，atomic(默认)类型的cut-over是github的算法，two-step采用的是facebook-OSC的算法。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_cut_over_exponential_backoff")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("Wait exponentially longer intervals between failed cut-over attempts. Wait intervals obey a maximum configurable with 'exponential-backoff-max-interval').")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_cut_over_lock_timeout_seconds")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("gh-ost在cut-over阶段最大的锁等待时间，当锁超时时，gh-ost的cut-over将重试。(默认值：3)")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_default_retries")]),t._v(" "),v("td",[t._v("60")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("各种操作在panick前重试次数。(默认为60)")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_discard_foreign_keys")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("该参数针对一个有外键的表，在gh-ost创建ghost表时，并不会为ghost表创建外键。该参数很适合用于删除外键，除此之外，请谨慎使用。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_dml_batch_size")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("在单个事务中应用DML事件的批量大小（范围1-100）（默认值为10）")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_exact_rowcount")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("准确统计表行数(使用select count(*)的方式)，得到更准确的预估时间。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_exponential_backoff_max_interval")]),t._v(" "),v("td",[t._v("64")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("Maximum number of seconds to wait between attempts when performing various operations with exponential backoff. (default 64)")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_force_named_cut_over")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("When true, the ‘unpostpone | cut-over’ interactive command must name the migrated table。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_force_table_names")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("table name prefix to be used on the temporary tables")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_gcp")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("google云平台支持")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_heartbeat_interval_millis")]),t._v(" "),v("td",[t._v("500")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("gh-ost心跳频率值，默认为500ms。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_initially_drop_ghost_table")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("gh-ost操作之前，检查并删除已经存在的ghost表。该参数不建议使用，请手动处理原来存在的ghost表。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_initially_drop_old_table")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("gh-ost操作之前，检查并删除已经存在的旧表。该参数不建议使用，请手动处理原来存在的ghost表。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_initially_drop_socket_file")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("gh-ost强制删除已经存在的socket文件。该参数不建议使用，可能会删除一个正在运行的gh-ost程序，导致DDL失败。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_max_lag_millis")]),t._v(" "),v("td",[t._v("1500")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主从复制最大延迟时间，当主从复制延迟时间超过该值后，gh-ost将采取节流(throttle)措施，默认值：1500ms。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_nice_ratio")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("float")]),t._v(" "),v("td",[t._v("每次chunk时间段的休眠时间，范围[0.0...100.0]。e.g:0：每个chunk时间段不休眠，即一个chunk接着一个chunk执行；1：每row-copy 1毫秒，则另外休眠1毫秒；0.7：每row-copy 10毫秒，则另外休眠7毫秒。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_ok_to_drop_table")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("gh-ost操作结束后，删除旧表，默认状态是"),v("code",[t._v("删除旧表")]),t._v("。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_postpone_cut_over_flag_file")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("当这个文件存在的时候，gh-ost的cut-over阶段将会被推迟，直到该文件被删除。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_replication_lag_query")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("检查主从复制延迟的SQL语句，默认gh-ost通过show slave status获取Seconds_behind_master作为主从延迟时间依据。如果使用pt-heartbeat工具，检查主从复制延迟的SQL语句类似于:"),v("code",[t._v("SELECT ROUND(UNIX_TIMESTAMP() - MAX(UNIX_TIMESTAMP(ts))) AS delay FROM my_schema.heartbeat")]),t._v(";")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_skip_foreign_key_checks")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("跳过外键检查,默认为"),v("code",[t._v("true")])])]),t._v(" "),v("tr",[v("td",[t._v("ghost_throttle_additional_flag_file")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("当该文件被创建后，gh-ost操作立即停止。该参数可以用在多个gh-ost同时操作的时候，创建一个文件，让所有的gh-ost操作停止，或者删除这个文件，让所有的gh-ost操作恢复。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_throttle_control_replicas")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("列出所有需要被检查主从复制延迟的从库。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_throttle_flag_file")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("当该文件被创建后，gh-ost操作立即停止。该参数适合控制单个gh-ost操作。-throttle-additional-flag-file string适合控制多个gh-ost操作。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_throttle_http")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("The --throttle-http flag allows for throttling via HTTP. Every 100ms gh-ost issues a HEAD request to the provided URL. If the response status code is not 200 throttling will kick in until a 200 response status code is returned.")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_throttle_query")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("节流查询。每秒钟执行一次。当返回值=0时不需要节流，当返回值>0时，需要执行节流操作。该查询会在数据迁移(migrated)服务器上操作，所以请确保该查询是轻量级的。")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_timestamp_old_table")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("在旧表名中使用时间戳。 这会使旧表名称具有唯一且无冲突的交叉迁移")])]),t._v(" "),v("tr",[v("td",[t._v("ghost_tungsten")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("告诉gh-ost你正在运行的是一个tungsten-replication拓扑结构。")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);