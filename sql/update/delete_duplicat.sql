/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [idLinkUDO]
      ,[IDUnit]
      ,[IDDamage]
      ,[IDOperation]
      ,[HumanHour]
      ,[Note]
	  --delete
  FROM [loko_nw].[dbo].[LnkUDO]
  where [idLinkUDO] in (107,97,100,131,95,102,103,104,87,90,93,91)