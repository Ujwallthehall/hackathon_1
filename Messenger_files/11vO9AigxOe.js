;/*FB_PKG_DELIM*/

__d("LSDeleteThenInsertAdminApprovalRequest",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.ftr(b.db.table(26).fetch([[[a[0],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.contactId,a[1])&&b.i64.gt(c.authorityLevel,a[3])}).next().then(function(c){var d=c.done;c.value;return d?b.db.table(26).put({threadKey:a[0],contactId:a[1],authorityLevel:a[3],subscribeSource:a[2]}):0})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateFilteredThreadsRanges",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return b.fe(b.ftr(b.db.table(247).fetch([[[a[1]]]]),function(c){return b.i64.eq(c.parentThreadKey,a[1])&&b.i64.eq(c.threadRangeFilter,a[2])&&b.i64.eq(c.secondaryThreadRangeFilter,a[7])&&c.threadRangeFilterValue===a[8]}),function(a){return a["delete"]()})},function(c){return b.db.table(247).add({minLastActivityTimestampMs:a[3],minThreadKey:a[4],parentThreadKey:a[1],folderName:a[0],threadRangeFilter:a[2],secondaryThreadRangeFilter:a[7],threadRangeFilterValue:a[8],maxLastActivityTimestampMs:b.i64.cast([0,1]),maxThreadKey:b.i64.cast([-2147483648,0]),isLoadingBefore:!1,isLoadingAfter:!1,hasMoreBefore:b.i64.gt(a[3],b.i64.cast([0,1]))&&b.i64.gt(a[4],b.i64.cast([-2147483648,0])),hasMoreAfter:!1})}])},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpsertRtcRoomOnThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(181).put({threadKey:a[0],roomState:a[1],roomUrl:a[2],roomThreadUseCase:a[3],showCtaUntilTimestampSec:a[4],roomExpirationTimestampSec:a[5]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);