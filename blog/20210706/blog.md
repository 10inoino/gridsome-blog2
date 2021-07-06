---
title: "20210706 DailyLog"
description: "20210706 DailyLog"
date: 2021-07-06
id: 21
blog_id: 21
---
# 記事

- [DynamoDB ベストプラクティス - Qiita](https://qiita.com/inouet/items/bcf9467a65b27c362ecf?utm_content=buffer76d80&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR1MiJy5LEXpUXL4hXe3aObgkiU1LpkJiiarJgGt0Wir6pITcQi0P2KY3lo)
    - あとでよむ

# Slackのリマインダー

平日にのみリマインダー飛ばすにはこんな感じ

```
/remind me "Hello World!" at 10:00 every weekday
```

- 参考記事
    - [Slack の Reminder で平日だけ通知させたいとき](https://qiita.com/yuya_takeyama/items/cc032aa162483761b140)

# PostgreSQLでテーブル名とカラム数を取得する

```sql
SELECT 
	table_name,count(column_name) AS column_count
FROM 
	information_schema.columns 
WHERE
	table_name NOT LIKE 'pg_%'
AND
	table_name NOT LIKE 'sql_%'
GROUP BY
	table_name
ORDER BY
	column_count DESC, table_name;
```

where条件でpostgresqlから提供されるテーブルは抜くようにしてます（多分routinesとかは残ってる）