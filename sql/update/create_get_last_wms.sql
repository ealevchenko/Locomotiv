USE [loko_nw]
GO

/****** Object:  UserDefinedFunction [IDS].[get_last_wms]    Script Date: 09.01.2021 16:48:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[get_last_wms] 
 ( )
		RETURNS 
		@status_locomotive TABLE  (
			[idNumLoko] [int] NOT NULL,
			[NumLoko] [nvarchar](15) NOT NULL,
			[idRepair] [int] NULL,
			[DateTimeStartRepair] [datetime] NULL,
			[repair] [int] NULL
		)
		AS
		 BEGIN
			insert @status_locomotive
			SELECT nl.[idNumLoko]
			  ,nl.[NumLoko]
			  ,rep.[idRepair]
			  ,rep.[DateTimeStartRepair]
			  ,[repair] = DATEDIFF(hour,rep.[DateTimeStartRepair], GETDATE())
			FROM [loko_nw].[dbo].[RefNumLoko] as nl LEFT JOIN
				[loko_nw].[dbo].[TabRepairs] as rep ON rep.[idRepair] = (SELECT top(1) [idRepair]  FROM [loko_nw].[dbo].[TabRepairs] where [DateTimeEndRepair] is null and [IDNumLoko] =nl.[idNumLoko])
  RETURN
 END

GO


