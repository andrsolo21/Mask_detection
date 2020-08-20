// Copyright 2013-2019 MathWorks, Inc.

function StringMap() {
    this.strings = {
        en: {
            bug_fixes:'Bug Fixes',
            click_to_collapse:'Click to Collapse',
            click_to_expand:'Click to Expand',
            back_to_top_of_page:'Back to Top of Page',
            back_to_top_of_section:'Back to Top of Section',
            yes:'Yes',
            no:'No',
            was_this_topic_helpful:'Was this topic helpful?',
            expand_all:'expand all',
            expand_all_in_page:'expand all in page',
            collapse_all:'collapse all',
            collapse_all_in_page:'collapse all in page',
            play:'Play',
            stop:'Stop',
            search_suggestions:'Search Suggestions',
            next: 'Next',
            previous: 'Previous',
            acknowledgments: 'Acknowledgments',
            trademarks: 'Trademarks',
            patents: 'Patents',
            terms_of_use: 'Terms of Use',
            search_results: 'Search Results',
            remove_facet_nuggets: 'Remove:',
            remove_all_facet_nuggets: 'Remove All',
            "Open Script": 'Open Script',
            "Open Live Script": 'Open Live Script',
            "Open Model": 'Open Model',
            "Open App": 'Open App',
            "Open Example": 'Open Example',
            "View more MATLAB Examples": 'View more<br>MATLAB Examples',
            "View more Simulink Examples": 'View more<br>Simulink Examples',
            "Try This Example": 'Try This Example',
            "Try it in your browser": 'Try it in your browser',
            "Try it in MATLAB": 'Try it in MATLAB',
            "topnav_view_more_examples": "View more<br>{0}<br>Examples",
            "topnav_header_category":"Category",
            "topnav_filter_all":"All",
            "topnav_filter_block":"Block",
            "topnav_filter_simscapeblock":"Simscape Block",
            "topnav_filter_codegen":"C/C++ Code Generation",
            "topnav_filter_gpucodegen":"GPU Code Generation",
            "topnav_filter_hdl":"HDL Code Generation",
            "topnav_filter_plc":"PLC Code Generation",
            "topnav_filter_fixpt":"Fixed-Point Conversion",
            "topnav_filter_tall":"Tall Arrays",
            "topnav_filter_distributedarrays":"Distributed Arrays",
            "topnav_filter_gpuarrays":"GPU Arrays",
            "topnav_filter_parallelautosupport":"Automatic Parallel Support",
            "topnav_filter_matlab":"MATLAB",
            "topnav_filter_simulink":"Simulink",
            "topnav_filter_header_blocktype":"Block Type",
            "topnav_filter_header_capability":"Extended Capability",
            "topnav_filter_header_exampleproduct":"Type",
            "topnav_filter_applied":"Results are filtered",
            "topnav_top_functions_only":"Showing popular functions from MATLAB. To view more functions select a product on the left.",
            "topnav_no_results_header":"No results in the {0} category.",
            "topnav_related_results":"Related categories with results:",
            "topnav_by_category":"By Category",
            "topnav_alphabetical_list":"Alphabetical List",
            "topnav_examples":"Examples",
            "topnav_frequently_used":"Frequently Viewed Pages",
            "project_doc_functions":"Functions",
            "project_doc_concepts":"Concepts",
            "search_general_error":"An error occurred searching the documentation.",
            "search_source_3p":"Supplemental Software",
            "search_source_mw":"MathWorks",
            "search_results_for_source_3p":"Results for <strong>{0}</strong> in Supplemental Software ({1} results)",
            "search_results_for_source_mw":"Results for <strong>{0}</strong> in MathWorks ({1} results)",
            "search_in_source_3p":"Show results for <strong>{0}</strong> in Supplemental Software instead ({1} results)",
            "search_in_source_mw":"Show results for <strong>{0}</strong> in MathWorks instead ({1} results)",
            "search_no_results_source_3p":"No results for <strong>{0}</strong> in Supplemental Software ({1} results)",
            "search_no_results_source_mw":"No results for <strong>{0}</strong> in MathWorks ({1} results)"
        },
        es: {
            bug_fixes:'Correcciones de fallos',
            click_to_collapse:'Haga clic para Contraer',
            click_to_expand:'Haga clic para Expandir',
            back_to_top_of_page:'Volver al principio de la página',
            back_to_top_of_section:'Volver al principio de la sección',
            yes:'Sí',
            no:'No',
            was_this_topic_helpful:'¿Fue útil este tema?',
            expand_all:'expandir todo',
            expand_all_in_page:'expandir todo en la página',
            collapse_all:'contraer todo',
            collapse_all_in_page:'contraer todo en la página',
            play:'Reproducir',
            stop:'Detener',
            search_suggestions:'Sugerencias de búsqueda',
            next: 'Siguiente',
            previous: 'Anterior',
            acknowledgments: 'Reconocimientos',
            trademarks: 'Marcas comerciales',
            patents: 'Patentes',
            terms_of_use: 'Términos de uso',
            search_results: 'Resultados de la búsqueda',
            remove_facet_nuggets: 'Eliminar:',
            remove_all_facet_nuggets: 'Eliminar todo',
            "Open Script": 'Abrir script',
            "Open Live Script": 'Abrir script en vivo',
            "Open Model": 'Abrir modelo',
            "Open App": 'Abrir aplicación',
            "Open Example": 'Abrir ejemplo',
            "View more MATLAB Examples": 'Ver más<br>ejemplos de MATLAB',
            "View more Simulink Examples": 'Ver más<br>ejemplos de Simulink',
            "Try This Example": 'Probar este ejemplo',
            "Try it in your browser": 'Probar en su navegador',
            "Try it in MATLAB": 'Probar en MATLAB',
            "topnav_view_more_examples": "Ver más<br>ejemplos de {0}<br>",
            "topnav_header_category":"Categoría",
            "topnav_filter_all":"Todo",
            "topnav_filter_block":"Bloque",
            "topnav_filter_simscapeblock":"Bloque de Simscape",
            "topnav_filter_codegen":"Generación de código C/C++",
            "topnav_filter_gpucodegen":"Generación de código de GPU",
            "topnav_filter_hdl":"Generación de código HDL",
            "topnav_filter_plc":"Generación de código PLC",
            "topnav_filter_fixpt":"Conversión de punto fijo",
            "topnav_filter_tall":"Arreglos altos",
            "topnav_filter_distributedarrays":"Arreglos distribuidos",
            "topnav_filter_gpuarrays":"Arreglos GPU",
            "topnav_filter_parallelautosupport":"Soporte paralelo automático",
            "topnav_filter_matlab":"MATLAB",
            "topnav_filter_simulink":"Simulink",
            "topnav_filter_header_blocktype":"Tipo de bloque",
            "topnav_filter_header_capability":"Capacidad ampliada",
            "topnav_filter_header_exampleproduct":"Tipo",
            "topnav_filter_applied":"Los resultados están filtrados",
            "topnav_top_functions_only":"Se muestran funciones populares de MATLAB. Para ver más funciones, seleccione un producto en la sección izquierda.",
            "topnav_no_results_header":"Sin resultados en la categoría {0}.",
            "topnav_related_results":"Categorías relacionadas con resultados:",
            "topnav_by_category":"Por categoría",
            "topnav_alphabetical_list":"Lista alfabética",
            "topnav_examples":"Ejemplos",
            "topnav_frequently_used":"Páginas visitadas con frecuencia",
            "project_doc_functions":"Funciones",
            "project_doc_concepts":"Conceptos",
            "search_general_error":"Se ha producido un error al buscar en la documentación.",
            "search_source_3p":"Software complementario",
            "search_source_mw":"MathWorks",
            "search_results_for_source_3p":"Resultados para <strong>{0}</strong> en el software complementario ({1} resultados)",
            "search_results_for_source_mw":"Resultados para <strong>{0}</strong> en MathWorks ({1} resultados)",
            "search_in_source_3p":"Mostrar los resultados para <strong>{0}</strong> en el software complementario ({1} resultados)",
            "search_in_source_mw":"Mostrar los resultados para <strong>{0}</strong> en MathWorks ({1} resultados)",
            "search_no_results_source_3p":"No hay resultados para <strong>{0}</strong> en el software complementario ({1} resultados)",
            "search_no_results_source_mw":"No hay resultados para <strong>{0}</strong> en MathWorks ({1} resultados)"
        },
        ja_JP: {
            bug_fixes:'バグ修正',
            click_to_collapse:'クリックで折りたたむ',
            click_to_expand:'クリックで展開する',
            back_to_top_of_page:'ページのトップへ',
            back_to_top_of_section:'節のトップへ',
            yes:'はい',
            no:'いいえ',
            was_this_topic_helpful:'この情報は役に立ちましたか?',
            expand_all:'すべて展開する',
            expand_all_in_page:'このページをすべて展開する',
            collapse_all:'すべて折りたたむ',
            collapse_all_in_page:'ページ内をすべて折りたたむ',
            play:'再生',
            stop:'停止',
            search_suggestions:'検索の提案',
            next: '次へ',
            previous: '前へ',
            acknowledgments: '謝辞 (英語)',
            trademarks: '商標 (英語)',
            patents: '特許 (英語)',
            terms_of_use: 'ご利用条件 (英語)',
            search_results: '検索結果',
            remove_facet_nuggets: '削除:',
            remove_all_facet_nuggets: 'すべて削除',
            "Open Script": 'スクリプトを開く',
            "Open Live Script": 'ライブ スクリプトを開く',
            "Open Model": 'モデルを開く',
            "Open App": 'アプリを開く',
            "Open Example": '例を開く',
            "View more MATLAB Examples": 'MATLAB の例を<br>さらに表示',
            "View more Simulink Examples": 'Simulink の例を<br>さらに表示',
            "Try This Example": 'この例を開く',
            "Try it in your browser": 'ブラウザーで開く',
            "Try it in MATLAB": 'MATLAB で開く',
            "topnav_view_more_examples": "{0}の例を<br>さらに表示",
            "topnav_header_category":"カテゴリ",
            "topnav_filter_all":"すべて",
            "topnav_filter_block":"ブロック",
            "topnav_filter_simscapeblock":"Simscape ブロック",
            "topnav_filter_codegen":"C/C++ コード生成",
            "topnav_filter_gpucodegen":"GPU コード生成",
            "topnav_filter_hdl":"HDL コード生成",
            "topnav_filter_plc":"PLC コード生成",
            "topnav_filter_fixpt":"固定小数点の変換",
            "topnav_filter_tall":"tall 配列",
            "topnav_filter_distributedarrays":"分散配列",
            "topnav_filter_gpuarrays":"GPU 配列",
            "topnav_filter_parallelautosupport":"自動並列サポート",
            "topnav_filter_matlab":"MATLAB",
            "topnav_filter_simulink":"Simulink",
            "topnav_filter_header_blocktype":"ブロック タイプ",
            "topnav_filter_header_capability":"拡張機能",
            "topnav_filter_header_exampleproduct":"タイプ",
            "topnav_filter_applied":"結果のフィルター処理済み",
            "topnav_top_functions_only":"よく使用される MATLAB の関数を表示しています。その他の関数を表示するには、左側で製品を選択してください。",
            "topnav_no_results_header":"{0} のカテゴリの結果はありません。",
            "topnav_related_results":"結果が得られた関連カテゴリ:",
            "topnav_by_category":"カテゴリ別",
            "topnav_alphabetical_list":"アルファベット順",
            "topnav_examples":"例",
            "topnav_frequently_used":"よく閲覧されるページ",
            "project_doc_functions":"関数",
            "project_doc_concepts":"概念",
            "search_general_error":"ドキュメンテーションの検索中にエラーが発生しました。",
            "search_source_3p":"補助ソフトウェア",
            "search_source_mw":"MathWorks",
            "search_results_for_source_3p":"補助ソフトウェアでの <strong>{0}</strong> の結果 (結果 {1} 件)",
            "search_results_for_source_mw":"MathWorks での <strong>{0}</strong> の結果 (結果 {1} 件)",
            "search_in_source_3p":"代わりに補助ソフトウェアでの <strong>{0}</strong> の結果を表示 (結果 {1} 件)",
            "search_in_source_mw":"代わりに MathWorks での <strong>{0}</strong> の結果を表示 (結果 {1} 件)",
            "search_no_results_source_3p":"補助ソフトウェアでの <strong>{0}</strong> の結果なし (結果 {1} 件)",
            "search_no_results_source_mw":"MathWorks での <strong>{0}</strong> の結果なし (結果 {1} 件)"
        },
        ko_KR: {
            bug_fixes:'수정된 버그',
            click_to_collapse:'축소하려면 클릭',
            click_to_expand:'확장하려면 클릭',
            back_to_top_of_page:'페이지의 맨 위로 이동',
            back_to_top_of_section:'섹션의 맨 위로 이동',
            yes:'예',
            no:'아니요',
            was_this_topic_helpful:'이 항목이 도움이 되었습니까?',
            expand_all:'모두 확장',
            expand_all_in_page:'페이지 내 모두 확장',
            collapse_all:'모두 축소',
            collapse_all_in_page:'페이지 내 모두 축소',
            play:'재생',
            stop:'중지',
            search_suggestions:'검색 제안',
            next: '다음',
            previous: '이전',
            acknowledgments: '감사',
            trademarks: '상표',
            patents: '특허',
            terms_of_use: '사용 약관',
            search_results: '검색 결과',
            remove_facet_nuggets: '제거:',
            remove_all_facet_nuggets: '모두 지우기',
            "Open Script": '스크립트 열기',
            "Open Live Script": '라이브 스크립트 열기',
            "Open Model": '모델 열기',
            "Open App": '앱 열기',
            "Open Example": '예제 열기',
            "View more MATLAB Examples": 'MATLAB 예제<br>더 보기',
            "View more Simulink Examples": 'Simulink 예제<br>더 보기',
            "Try This Example": '예제 실행하기',
            "Try it in your browser": '브라우저에서 실행',
            "Try it in MATLAB": 'MATLAB에서 실행',
            "topnav_view_more_examples": "{0}<br>예제<br>더 보기",
            "topnav_header_category":"범주",
            "topnav_filter_all":"모두",
            "topnav_filter_block":"블록",
            "topnav_filter_simscapeblock":"Simscape 블록",
            "topnav_filter_codegen":"C/C++ 코드 생성",
            "topnav_filter_gpucodegen":"GPU 코드 생성",
            "topnav_filter_hdl":"HDL 코드 생성",
            "topnav_filter_plc":"PLC 코드 생성",
            "topnav_filter_fixpt":"고정소수점 변환",
            "topnav_filter_tall":"tall형 배열",
            "topnav_filter_distributedarrays":"분산 배열",
            "topnav_filter_gpuarrays":"GPU 배열",
            "topnav_filter_parallelautosupport":"자동 병렬 지원",
            "topnav_filter_matlab":"MATLAB",
            "topnav_filter_simulink":"Simulink",
            "topnav_filter_header_blocktype":"블록 유형",
            "topnav_filter_header_capability":"확장 기능",
            "topnav_filter_header_exampleproduct":"유형",
            "topnav_filter_applied":"결과가 필터링됨",
            "topnav_top_functions_only":"MATLAB에서 자주 사용되는 함수를 표시합니다. 더 많은 함수를 보려면 왼쪽에서 제품을 선택하십시오.",
            "topnav_no_results_header":"{0} 범주에 결과가 없습니다.",
            "topnav_related_results":"결과가 있는 관련 범주:",
            "topnav_by_category":"범주별 정렬",
            "topnav_alphabetical_list":"사전순 정렬",
            "topnav_examples":"예제",
            "topnav_frequently_used":"자주 보는 페이지",
            "project_doc_functions":"함수",
            "project_doc_concepts":"개념",
            "search_general_error":"문서를 검색하는 중 오류가 발생했습니다.",
            "search_source_3p":"추가 소프트웨어",
            "search_source_mw":"MathWorks",
            "search_results_for_source_3p":"<strong>{0}</strong> 검색어로 추가 소프트웨어에서 검색한 결과({1}개)",
            "search_results_for_source_mw":"<strong>{0}</strong> 검색어로 MathWorks에서 검색한 결과({1}개)",
            "search_in_source_3p":"<strong>{0}</strong> 검색어로 추가 소프트웨어에서 검색한 결과를 대신 표시({1}개)",
            "search_in_source_mw":"<strong>{0}</strong> 검색어로 MathWorks에서 검색한 결과를 대신 표시({1}개)",
            "search_no_results_source_3p":"<strong>{0}</strong> 검색어로 추가 소프트웨어에서 검색한 결과가 없음({1}개)",
            "search_no_results_source_mw":"<strong>{0}</strong> 검색어로 MathWorks에서 검색한 결과가 없음({1}개)"
        },
        zh_CN: {
            bug_fixes:'错误修复',
            click_to_collapse:'点击以折叠',
            click_to_expand:'点击以展开',
            back_to_top_of_page:'返回页首',
            back_to_top_of_section:'返回节首',
            yes:'是',
            no:'否',
            was_this_topic_helpful:'此主题对您有帮助吗？',
            expand_all:'全部展开',
            expand_all_in_page:'全页展开',
            collapse_all:'全部折叠',
            collapse_all_in_page:'全页折叠',
            play:'播放',
            stop:'停止',
            search_suggestions:'搜索建议',
            next: '下一页',
            previous: '上一页',
            acknowledgments: '致谢',
            trademarks: '商标',
            patents: '专利',
            terms_of_use: '使用条款',
            search_results: '搜索结果',
            remove_facet_nuggets: '删除：',
            remove_all_facet_nuggets: '全部删除',
            "Open Script": '打开脚本',
            "Open Live Script": '打开实时脚本',
            "Open Model": '打开模型',
            "Open App": '打开 App',
            "Open Example": '打开示例',
            "View more MATLAB Examples": '查看更多<br>MATLAB 示例',
            "View more Simulink Examples": '查看更多<br>Simulink 示例',
            "Try This Example": '尝试此示例',
            "Try it in your browser": '在浏览器中尝试',
            "Try it in MATLAB": '在 MATLAB 中尝试',
            "topnav_view_more_examples": "查看更多<br>{0}<br>示例",
            "topnav_header_category":"类别",
            "topnav_filter_all":"所有",
            "topnav_filter_block":"模块",
            "topnav_filter_simscapeblock":"Simscape 模块",
            "topnav_filter_codegen":"C/C++ 代码生成",
            "topnav_filter_gpucodegen":"GPU 代码生成",
            "topnav_filter_hdl":"HDL 代码生成",
            "topnav_filter_plc":"PLC 代码生成",
            "topnav_filter_fixpt":"定点转换",
            "topnav_filter_tall":"tall 数组",
            "topnav_filter_distributedarrays":"分布式数组",
            "topnav_filter_gpuarrays":"GPU 数组",
            "topnav_filter_parallelautosupport":"自动并行支持",
            "topnav_filter_matlab":"MATLAB",
            "topnav_filter_simulink":"Simulink",
            "topnav_filter_header_blocktype":"模块类型",
            "topnav_filter_header_capability":"扩展功能",
            "topnav_filter_header_exampleproduct":"类型",
            "topnav_filter_applied":"结果已经过筛选",
            "topnav_top_functions_only":"显示常用 MATLAB 函数。要查看更多函数，请从左侧选择一个产品。",
            "topnav_no_results_header":"在 {0} 类别中无结果。",
            "topnav_related_results":"包含结果的相关类别：",
            "topnav_by_category":"按类别",
            "topnav_alphabetical_list":"按字母顺序排列的列表",
            "topnav_examples":"示例",
            "topnav_frequently_used":"经常访问的页面",
            "project_doc_functions":"函数",
            "project_doc_concepts":"概念",
            "search_general_error":"搜索文档时出错。",
            "search_source_3p":"补充软件",
            "search_source_mw":"MathWorks",
            "search_results_for_source_3p":"补充软件中 <strong>{0}</strong> 的结果({1} 个结果)",
            "search_results_for_source_mw":"MathWorks 中 <strong>{0}</strong> 的结果({1} 个结果)",
            "search_in_source_3p":"显示补充软件中 <strong>{0}</strong> 的结果({1} 个结果)",
            "search_in_source_mw":"显示 MathWorks 中 <strong>{0}</strong> 的结果({1} 个结果)",
            "search_no_results_source_3p":"补充软件中无 <strong>{0}</strong> 的结果({1} 个结果)",
            "search_no_results_source_mw":"MathWorks 中无 <strong>{0}</strong> 的结果({1} 个结果)"
        }
    };

    this.strings['ja'] = this.strings['ja_JP'];
    this.strings['ko'] = this.strings['ko_KR'];
    this.strings['zh'] = this.strings['zh_CN'];

    this.getLocalizedString = function(lang, str) {
        var result = this.strings[lang][str];
        if (!result) {
            result = this.strings["en"][str];
        }
        return result;
    };
}

function getPageLanguage() {
    var localeEl = $("#doc_center_content");
    if (localeEl.length === 0) {
        localeEl = $("#docsearch_form");
        return localeEl.attr('data-language');
    } else {
        return localeEl.attr('lang');
    }
}

function getLocalizedString(str, locale) {
    var lang = locale ? locale : getPageLanguage() || 'en';
    var sMap = new StringMap();
    return sMap.getLocalizedString(lang, str);
}