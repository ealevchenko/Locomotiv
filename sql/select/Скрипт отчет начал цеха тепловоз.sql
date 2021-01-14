/****** Script for SelectTopNRows command from SSMS  ******/
SELECT nl.[idNumLoko]
      ,nl.[NumLoko]
	  ,rep.[idRepair]
      --,rep.[IDNumLoko]
      ,rep.[DateTimeStartRepair]
      ,rep.[DateTimeEndRepair]
	  ,[repair] = DATEDIFF(hour,rep.[DateTimeStartRepair], GETDATE())
	  ,act.[idAction]
      ,act.[IDLnkUDO]
      --,act.[DateActiion]
	  ,U.[Unit]
	  ,O.[Operation]
      ,act.[HRresourse]
	  --into status_repairs_lokomotive
  FROM [loko_nw].[dbo].[RefNumLoko] as nl LEFT JOIN
  [loko_nw].[dbo].[TabRepairs] as rep ON rep.[idRepair] = (SELECT top(1) [idRepair]  FROM [loko_nw].[dbo].[TabRepairs] where [DateTimeEndRepair] is not null and [IDNumLoko] =nl.[idNumLoko]) LEFT JOIN
  [loko_nw].[dbo].[TabActions] as act ON act.[IDRepair] = rep.[idRepair] LEFT JOIN 
  [loko_nw].[dbo].[LnkUDO] as lnk ON lnk.[idLinkUDO] = act.[IDLnkUDO] LEFT JOIN 
  [loko_nw].[dbo].[RefUnit] as U ON U.[idUnit] = lnk.[IDUnit] LEFT JOIN 
  [loko_nw].[dbo].[RefOperation] as O ON O.[idOperation] = lnk.[IDOperation]