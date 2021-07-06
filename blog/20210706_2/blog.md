---
title: "20210705 DailyLog"
description: "20210705 DailyLog"
date: 2021-07-06
id: 20
blog_id: 20
---
一日遅れて投稿。

# 記事
- [採用市場に中堅エンジニアがほぼ居ない／どこに行ったのか目撃情報を集めてみた](https://note.com/makaibito/n/n289c9de14b53?fbclid=IwAR2NtEZ-1y6RSI-qENNvf3o4dms10grinILF4ZlwInBkIpuG_0O93LhqXjM)
    - おもろい。ここで言う中堅ってのがどの層を指してるのかが、不明瞭だけど、業界横断した人脈さえあれば、転職市場に出なくてもなんとかなっちゃってるんだろうなぁ

# 調べた
## LambdaでDocumentDBいじる方法
pythonは大学で数時間触れたレベルでしかないんですが、なんとなく感覚で書いてみます。

- DocumentDBのクライアントはこんな感じ
    - [https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/docdb.html](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/docdb.html)
- [関数定義の方法](https://www.python.jp/train/function/index.html)

```python
def 関数名(引数名1, 引数名2, ...):
    処理1
    処理2
    ...
```

関数を括弧で囲わない言語はちょっと違和感があるなぁ
- ステータス取得してるQiita
    - [AWS DocumentDBのステータスを通知するLambda関数](https://qiita.com/okonomiyaki-sushi/items/f4a2a1bae08ee60b1ec6)
    - 上記記事にAWSのマネージドポリシーのAmazonDocDBReadOnlyAccessをあててねって書いてあるけど、AmazonDocDBReadOnlyAccessのポリシーの中身ってこんな感じなんよね

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "rds:DescribeAccountAttributes",
                "rds:DescribeCertificates",
                "rds:DescribeDBClusterParameterGroups",
                "rds:DescribeDBClusterParameters",
                "rds:DescribeDBClusterSnapshotAttributes",
                "rds:DescribeDBClusterSnapshots",
                "rds:DescribeDBClusters",
                "rds:DescribeDBEngineVersions",
                "rds:DescribeDBInstances",
                "rds:DescribeDBLogFiles",
                "rds:DescribeDBParameterGroups",
                "rds:DescribeDBParameters",
                "rds:DescribeDBSubnetGroups",
                "rds:DescribeEventCategories",
                "rds:DescribeEventSubscriptions",
                "rds:DescribeEvents",
                "rds:DescribeOrderableDBInstanceOptions",
                "rds:DescribePendingMaintenanceActions",
                "rds:DownloadDBLogFilePortion",
                "rds:ListTagsForResource"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": [
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:ListMetrics"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": [
                "ec2:DescribeAccountAttributes",
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeInternetGateways",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcAttribute",
                "ec2:DescribeVpcs"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": [
                "kms:ListKeys",
                "kms:ListRetirableGrants",
                "kms:ListAliases",
                "kms:ListKeyPolicies"
            ],
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": [
                "logs:DescribeLogStreams",
                "logs:GetLogEvents"
            ],
            "Effect": "Allow",
            "Resource": [
                "arn:aws:logs:*:*:log-group:/aws/rds/*:log-stream:*",
                "arn:aws:logs:*:*:log-group:/aws/docdb/*:log-stream:*"
            ]
        }
    ]
}
```

上記からも、DocumentDB専用のポリシーは無くて、RDBと一緒ってことが分かります。

オチとしては、結局DocumentDBをいじりたかったら、RDBをいじるようなコードを書いて、'Engine'がdocdbのものだけを対象にすればよかったということが判明。めでたしめでたし。

- Lambdaで吐いたログは、LambdaのResultで見ようとすると、ちょっとしか見えないので、基本的にはCloudwatchで見ようね
    - [AWS Lambdaのデバッグ方法](https://qiita.com/keitakn/items/02fcee5bbb037bbd2e41)
- pythonのinってメチャクチャ汎用性高いのね
    - [Pythonのin演算子でリストなどに特定の要素が含まれるか判定](https://note.nkmk.me/python-in-basic/)
    - 配列に対してはphpのin_array的な挙動になるし、辞書型に対してはarray_key_exist的な挙動を見せる
- しかも部分一致も結構楽に書けそう
    - [Pythonで文字列を比較（完全一致、部分一致、大小関係など）](https://note.nkmk.me/python-str-compare/)
- 日付取得
    - [Pythonで現在時刻・日付・日時を取得](https://note.nkmk.me/python-datetime-now-today/)
    - [【Python】日付のフォーマット（表示書式）を変更する方法｜strftimeとformatの使い方を実例でわかりやすく解説](https://prograshi.com/language/python/python-change-datetime-output-format/)
- 正規表現
    - [Pythonの正規表現モジュールreの使い方（match、search、subなど）](https://note.nkmk.me/python-re-match-search-findall-etc/)

## そもそもboto3ってなんだっけ

- AWS SDK for Pythonの別称
- なんでbotoなん？
    - アマゾンカワイルカの別名がBoto Vermelhoらしく、そこからとってるらしい
    - [AWS SDK for Python である boto という名前の意味と由来](https://reboooot.net/post/why-boto/)
    - [アマゾンカワイルカ](https://www.wikiwand.com/ja/%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3%E3%82%AB%E3%83%AF%E3%82%A4%E3%83%AB%E3%82%AB)

## yyyymmddフォーマットチェッカ作ってみた

```python
import re

def is_yyyymmdd(yyyymmdd):
    
    if not re.fullmatch(r'\d{8}', yyyymmdd) :
        return False
    
    try:
        newDataStr="%04s/%02s/%02s"%(yyyymmdd[0:4],yyyymmdd[4:6],yyyymmdd[6:8])
        newDate=datetime.datetime.strptime(newDataStr,"%Y/%m/%d")
        return True
    except ValueError:
        return False
```

最初は[こちら](http://ututel.blog121.fc2.com/blog-entry-205.html) を参考に作っていたが、yyyymmddをチェックしたかったのと、

```python
newDataStr="%04d/%02d/%02d"%(year,month,day)
```

の部分が、intで日付が来ることが想定されていたコードっぽかった為、ちょっと修正した。