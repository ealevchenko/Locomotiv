/****** Script for SelectTopNRows command from SSMS  ******/
SELECT max([idLinkUDO]), count([idLinkUDO])
      --,[IDUnit]
      --,[IDDamage]
      --,[IDOperation]
      --,[HumanHour]
      --,[Note]
  FROM [loko_nw].[dbo].[LnkUDO]
  group by [IDUnit], [IDDamage], [IDOperation]
   HAVING count([idLinkUDO])>1


