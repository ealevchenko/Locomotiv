USE [loko_nw]
GO

/****** Object:  UserDefinedFunction [dbo].[get_reports_repairs_lokomotive]    Script Date: 15.01.2021 22:38:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE FUNCTION [dbo].[get_reports_repairs_lokomotive] 
 ( )
		RETURNS 
		@reports TABLE  (
			[idNumLoko] [int] NOT NULL,
			[NumLoko] [nvarchar](15) NOT NULL,
			[idRepair] [int] NULL,
			[DateTimeStartRepair] [datetime] NULL,
			[DateTimeEndRepair] [datetime] NULL,
			[repair] [int] NULL,
			[idAction] [int] NULL,
			[IDLnkUDO] [int] NULL,
			[DateActiion] [datetime] NULL,
			[idUnit] [int] NULL,
			[Unit] [nvarchar](50) NULL,
			[Operation] [nvarchar](50) NULL,
			[idDamage] [int] NULL,
			[Damage] [nvarchar](50) NULL,
			[HRresourse] [real] NULL
		)
		AS
		 BEGIN
			insert @reports
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
			  [loko_nw].[dbo].[TabRepairs] as rep ON rep.[idRepair] = (SELECT top(1) [idRepair]  FROM [loko_nw].[dbo].[TabRepairs] where [DateTimeEndRepair] is not null and [IDNumLoko] =nl.[idNumLoko]) LEFT JOIN
			  [loko_nw].[dbo].[TabActions] as act ON act.[IDRepair] = rep.[idRepair] LEFT JOIN 
			  [loko_nw].[dbo].[LnkUDO] as lnk ON lnk.[idLinkUDO] = act.[IDLnkUDO] LEFT JOIN 
			  [loko_nw].[dbo].[RefUnit] as U ON U.[idUnit] = lnk.[IDUnit] LEFT JOIN 
			  [loko_nw].[dbo].[RefOperation] as O ON O.[idOperation] = lnk.[IDOperation] LEFT JOIN
			  [loko_nw].[dbo].[RefDamage] as D ON D.[idDamage] = lnk.[IDDamage]
  RETURN
 END

GO


