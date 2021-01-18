select * from [dbo].[get_reports_repairs_lokomotive]() 
where idNumLoko = 1 
and 
[DateTimeStartRepair] >= Convert(datetime, '2020-10-01 00:00:00.000',120) 
and [DateTimeStartRepair] <= Convert(datetime, '2020-10-30 00:00:00.000',120)

			SELECT nl.[idNumLoko]
				  ,nl.[NumLoko]
				  ,rep.[idRepair]
				  --,rep.[IDNumLoko]
				  ,rep.[DateTimeStartRepair]
				  ,rep.[DateTimeEndRepair]
				  ,[repair] = DATEDIFF(hour,rep.[DateTimeStartRepair], GETDATE())
				  ,act.[idAction]
				  ,act.[IDLnkUDO]
				  ,act.[DateActiion]
				  ,U.idUnit
				  ,U.[Unit]
				  ,O.[Operation]
				  ,D.idDamage
				  ,D.Damage
				  ,act.[HRresourse]
				  --into status_repairs_lokomotive
			  FROM [loko_nw].[dbo].[RefNumLoko] as nl LEFT JOIN
			  [loko_nw].[dbo].[TabRepairs] as rep ON rep.[idRepair] = (SELECT top(1) [idRepair]  FROM [loko_nw].[dbo].[TabRepairs] where [IDNumLoko] =nl.[idNumLoko]) LEFT JOIN
			  [loko_nw].[dbo].[TabActions] as act ON act.[IDRepair] = rep.[idRepair] LEFT JOIN 
			  [loko_nw].[dbo].[LnkUDO] as lnk ON lnk.[idLinkUDO] = act.[IDLnkUDO] LEFT JOIN 
			  [loko_nw].[dbo].[RefUnit] as U ON U.[idUnit] = lnk.[IDUnit] LEFT JOIN 
			  [loko_nw].[dbo].[RefOperation] as O ON O.[idOperation] = lnk.[IDOperation] LEFT JOIN
			  [loko_nw].[dbo].[RefDamage] as D ON D.[idDamage] = lnk.[IDDamage]