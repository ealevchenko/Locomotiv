/****** Script for SelectTopNRows command from SSMS  ******/
SELECT nl.[idNumLoko]
      ,nl.[NumLoko]
	  ,rep.[idRepair]
      --,rep.[IDNumLoko]
      ,rep.[DateTimeStartRepair]
      --,rep.[DateTimeEndRepair]
	  ,[repair] = DATEDIFF(hour,rep.[DateTimeStartRepair], GETDATE())
	  into status_loko
  FROM [loko_nw].[dbo].[RefNumLoko] as nl LEFT JOIN
  [loko_nw].[dbo].[TabRepairs] as rep ON rep.[idRepair] = (SELECT top(1) [idRepair]  FROM [loko_nw].[dbo].[TabRepairs] where [DateTimeEndRepair] is null and [IDNumLoko] =nl.[idNumLoko])

