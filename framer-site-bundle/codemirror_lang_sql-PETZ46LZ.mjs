import{a as X,b as R}from"./chunk-FDK24PL7.mjs";import{N as q,P as i,U as T,V as L,X as U,ca as z,fa as B,ha as V,qa as D,sa as j}from"./chunk-2TQEHBBO.mjs";import"./chunk-JXOLF6V7.mjs";var oe=36,Z=1,se=2,k=3,w=4,le=5,ce=6,de=7,me=8,ue=9,fe=10,pe=11,ge=12,he=13,_e=14,be=15,ve=16,ye=17,I=18,ke=19,F=20,K=21,N=22,Oe=23,xe=24;function Q(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function we(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function u(e,t,r){for(let a=!1;;){if(e.next<0)return;if(e.next==t&&!a){e.advance();return}a=r&&!a&&e.next==92,e.advance()}}function Qe(e){for(;;){if(e.next<0||e.peek(1)<0)return;if(e.next==36&&e.peek(1)==36){e.advance(2);return}e.advance()}}function G(e,t){for(;!(e.next!=95&&!Q(e.next));)t!=null&&(t+=String.fromCharCode(e.next)),e.advance();return t}function Se(e){if(e.next==39||e.next==34||e.next==96){let t=e.next;e.advance(),u(e,t,!1)}else G(e)}function $(e,t){for(;e.next==48||e.next==49;)e.advance();t&&e.next==t&&e.advance()}function E(e,t){for(;;){if(e.next==46){if(t)break;t=!0}else if(e.next<48||e.next>57)break;e.advance()}if(e.next==69||e.next==101)for(e.advance(),(e.next==43||e.next==45)&&e.advance();e.next>=48&&e.next<=57;)e.advance()}function W(e){for(;!(e.next<0||e.next==10);)e.advance()}function h(e,t){for(let r=0;r<t.length;r++)if(t.charCodeAt(r)==e)return!0;return!1}var M=` 	\r
`;function Y(e,t,r){let a=Object.create(null);a.true=a.false=le,a.null=a.unknown=ce;for(let n of e.split(" "))n&&(a[n]=F);for(let n of t.split(" "))n&&(a[n]=K);for(let n of(r||"").split(" "))n&&(a[n]=xe);return a}var f="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",p="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",S={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:Y(p,f)};function Ce(e,t,r,a){let n={};for(let s in S)n[s]=(e.hasOwnProperty(s)?e:S)[s];return t&&(n.words=Y(t,r||"",a)),n}function H(e){return new D(t=>{var r;let{next:a}=t;if(t.advance(),h(a,M)){for(;h(t.next,M);)t.advance();t.acceptToken(oe)}else if(a==36&&t.next==36&&e.doubleDollarQuotedStrings)Qe(t),t.acceptToken(k);else if(a==39||a==34&&e.doubleQuotedStrings)u(t,a,e.backslashEscapes),t.acceptToken(k);else if(a==35&&e.hashComments||a==47&&t.next==47&&e.slashComments)W(t),t.acceptToken(Z);else if(a==45&&t.next==45&&(!e.spaceAfterDashes||t.peek(1)==32))W(t),t.acceptToken(Z);else if(a==47&&t.next==42){t.advance();for(let n=1;;){let s=t.next;if(t.next<0)break;if(t.advance(),s==42&&t.next==47){if(n--,t.advance(),!n)break}else s==47&&t.next==42&&(n++,t.advance())}t.acceptToken(se)}else if((a==101||a==69)&&t.next==39)t.advance(),u(t,39,!0);else if((a==110||a==78)&&t.next==39&&e.charSetCasts)t.advance(),u(t,39,e.backslashEscapes),t.acceptToken(k);else if(a==95&&e.charSetCasts)for(let n=0;;n++){if(t.next==39&&n>1){t.advance(),u(t,39,e.backslashEscapes),t.acceptToken(k);break}if(!Q(t.next))break;t.advance()}else if(a==40)t.acceptToken(de);else if(a==41)t.acceptToken(me);else if(a==123)t.acceptToken(ue);else if(a==125)t.acceptToken(fe);else if(a==91)t.acceptToken(pe);else if(a==93)t.acceptToken(ge);else if(a==59)t.acceptToken(he);else if(e.unquotedBitLiterals&&a==48&&t.next==98)t.advance(),$(t),t.acceptToken(N);else if((a==98||a==66)&&(t.next==39||t.next==34)){let n=t.next;t.advance(),e.treatBitsAsBytes?(u(t,n,e.backslashEscapes),t.acceptToken(Oe)):($(t,n),t.acceptToken(N))}else if(a==48&&(t.next==120||t.next==88)||(a==120||a==88)&&t.next==39){let n=t.next==39;for(t.advance();we(t.next);)t.advance();n&&t.next==39&&t.advance(),t.acceptToken(w)}else if(a==46&&t.next>=48&&t.next<=57)E(t,!0),t.acceptToken(w);else if(a==46)t.acceptToken(_e);else if(a>=48&&a<=57)E(t,!1),t.acceptToken(w);else if(h(a,e.operatorChars)){for(;h(t.next,e.operatorChars);)t.advance();t.acceptToken(be)}else if(h(a,e.specialVar))t.next==a&&t.advance(),Se(t),t.acceptToken(ye);else if(h(a,e.identifierQuotes))u(t,a,!1),t.acceptToken(ke);else if(a==58||a==44)t.acceptToken(ve);else if(Q(a)){let n=G(t,String.fromCharCode(a));t.acceptToken(t.next==46?I:(r=e.words[n.toLowerCase()])!==null&&r!==void 0?r:I)}})}var J=H(S),Pe=j.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"\u26A0 LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,J],topRules:{Script:[0,25]},tokenPrec:0});function C(e){let t=e.cursor().moveTo(e.from,-1);for(;/Comment/.test(t.name);)t.moveTo(t.from,-1);return t.node}function b(e,t){let r=e.sliceString(t.from,t.to),a=/^([`'"])(.*)\1$/.exec(r);return a?a[2]:r}function O(e){return e&&(e.name=="Identifier"||e.name=="QuotedIdentifier")}function qe(e,t){if(t.name=="CompositeIdentifier"){let r=[];for(let a=t.firstChild;a;a=a.nextSibling)O(a)&&r.push(b(e,a));return r}return[b(e,t)]}function A(e,t){for(let r=[];;){if(!t||t.name!=".")return r;let a=C(t);if(!O(a))return r;r.unshift(b(e,a)),t=C(a)}}function Te(e,t){let r=L(e).resolveInner(t,-1),a=Ue(e.doc,r);return r.name=="Identifier"||r.name=="QuotedIdentifier"||r.name=="Keyword"?{from:r.from,quoted:r.name=="QuotedIdentifier"?e.doc.sliceString(r.from,r.from+1):null,parents:A(e.doc,C(r)),aliases:a}:r.name=="."?{from:t,quoted:null,parents:A(e.doc,r),aliases:a}:{from:t,quoted:null,parents:[],empty:!0,aliases:a}}var Le=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));function Ue(e,t){let r;for(let n=t;!r;n=n.parent){if(!n)return null;n.name=="Statement"&&(r=n)}let a=null;for(let n=r.firstChild,s=!1,c=null;n;n=n.nextSibling){let o=n.name=="Keyword"?e.sliceString(n.from,n.to).toLowerCase():null,l=null;if(!s)s=o=="from";else if(o=="as"&&c&&O(n.nextSibling))l=b(e,n.nextSibling);else{if(o&&Le.has(o))break;c&&O(n)&&(l=b(e,n))}l&&(a||(a=Object.create(null)),a[l]=qe(e,c)),c=/Identifier$/.test(n.name)?n:null}return a}function ze(e,t){return e?t.map(r=>Object.assign(Object.assign({},r),{label:e+r.label+e,apply:void 0})):t}var Be=/^\w*$/,Ve=/^[`'"]?\w*[`'"]?$/,ee=class{child(e){let t=this.children||(this.children=Object.create(null));return t[e]||(t[e]=new ee)}childCompletions(e){return this.children?Object.keys(this.children).filter(t=>t).map(t=>({label:t,type:e})):[]}constructor(){this.list=[],this.children=void 0}};function Xe(e,t,r,a,n){let s=new ee,c=s.child(n||"");for(let o in e){let l=o.indexOf("."),g=(l>-1?s.child(o.slice(0,l)):c).child(l>-1?o.slice(l+1):o);g.list=e[o].map(_=>typeof _=="string"?{label:_,type:"property"}:_)}c.list=(t||c.childCompletions("type")).concat(a?c.child(a).list:[]);for(let o in s.children){let l=s.child(o);l.list.length||(l.list=l.childCompletions("type"))}return s.list=c.list.concat(r||s.childCompletions("type")),o=>{let{parents:l,from:P,quoted:g,empty:_,aliases:v}=Te(o.state,o.pos);if(_&&!o.explicit)return null;v&&l.length==1&&(l=v[l[0]]||l);let d=s;for(let y of l){for(;!d.children||!d.children[y];)if(d==s)d=c;else if(d==c&&a)d=d.child(a);else return null;d=d.child(y)}let ie=g&&o.state.sliceDoc(o.pos,o.pos+1)==g,x=d.list;return d==s&&v&&(x=x.concat(Object.keys(v).map(y=>({label:y,type:"constant"})))),{from:P,to:ie?o.pos+1:void 0,options:ze(g,x),validFor:g?Ve:Be}}}function Re(e,t){let r=Object.keys(e).map(a=>({label:t?a.toUpperCase():a,type:e[a]==K?"type":e[a]==F?"keyword":"variable",boost:-1}));return R(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],X(r))}var De=Pe.configure({props:[z.add({Statement:B()}),V.add({Statement(e){return{from:e.firstChild.to,to:e.to}},BlockComment(e){return{from:e.from+2,to:e.to-2}}}),q({Keyword:i.keyword,Type:i.typeName,Builtin:i.standard(i.name),Bits:i.number,Bytes:i.string,Bool:i.bool,Null:i.null,Number:i.number,String:i.string,Identifier:i.name,QuotedIdentifier:i.special(i.string),SpecialVar:i.special(i.name),LineComment:i.lineComment,BlockComment:i.blockComment,Operator:i.operator,"Semi Punctuation":i.punctuation,"( )":i.paren,"{ }":i.brace,"[ ]":i.squareBracket})]}),m=class{get extension(){return this.language.extension}static define(e){let t=Ce(e,e.keywords,e.types,e.builtin),r=T.define({name:"sql",parser:De.configure({tokenizers:[{from:J,to:H(t)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new m(t,r,e)}constructor(e,t,r){this.dialect=e,this.language=t,this.spec=r}};function je(e,t=!1){return Re(e.dialect.words,t)}function Ze(e,t=!1){return e.language.data.of({autocomplete:je(e,t)})}function Ie(e){return e.schema?Xe(e.schema,e.tables,e.schemas,e.defaultTable,e.defaultSchema):()=>null}function Ne(e){return e.schema?(e.dialect||te).language.data.of({autocomplete:Ie(e)}):[]}function Ge(e={}){let t=e.dialect||te;return new U(t.language,[Ne(e),Ze(t,!!e.upperCaseKeywords)])}var te=m.define({}),Ye=m.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:p+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:f+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),ae="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",re=f+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",ne="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",He=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:p+"group_concat "+ae,types:re,builtin:ne}),Je=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:p+"always generated groupby_concat hard persistent shutdown soft virtual "+ae,types:re,builtin:ne}),et=m.define({keywords:p+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:f+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),tt=m.define({keywords:p+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:f+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),at=m.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:f+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),rt=m.define({keywords:p+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:f+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0});var nt={exports:{MSSQL:{type:"variable",annotations:{framerContractVersion:"1"}},schemaCompletion:{type:"function",annotations:{framerContractVersion:"1"}},sql:{type:"function",annotations:{framerContractVersion:"1"}},PostgreSQL:{type:"variable",annotations:{framerContractVersion:"1"}},StandardSQL:{type:"variable",annotations:{framerContractVersion:"1"}},SQLDialect:{type:"variable",annotations:{framerContractVersion:"1"}},keywordCompletionSource:{type:"function",annotations:{framerContractVersion:"1"}},keywordCompletion:{type:"function",annotations:{framerContractVersion:"1"}},MySQL:{type:"variable",annotations:{framerContractVersion:"1"}},MariaSQL:{type:"variable",annotations:{framerContractVersion:"1"}},PLSQL:{type:"variable",annotations:{framerContractVersion:"1"}},schemaCompletionSource:{type:"function",annotations:{framerContractVersion:"1"}},Cassandra:{type:"variable",annotations:{framerContractVersion:"1"}},SQLite:{type:"variable",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{at as Cassandra,et as MSSQL,Je as MariaSQL,He as MySQL,rt as PLSQL,Ye as PostgreSQL,m as SQLDialect,tt as SQLite,te as StandardSQL,nt as __FramerMetadata__,Ze as keywordCompletion,je as keywordCompletionSource,Ne as schemaCompletion,Ie as schemaCompletionSource,Ge as sql};
//# sourceMappingURL=codemirror_lang_sql-PETZ46LZ.mjs.map
