USE [loko_nw]
GO
/****** Object:  Table [dbo].[TabActions]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TabActions](
	[idAction] [int] IDENTITY(1,1) NOT NULL,
	[IDRepair] [int] NOT NULL,
	[IDLnkUDO] [int] NOT NULL,
	[DateActiion] [datetime] NOT NULL,
	[HRresourse] [real] NULL,
 CONSTRAINT [PK_TabActions] PRIMARY KEY CLUSTERED 
(
	[idAction] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TabActions]  WITH CHECK ADD  CONSTRAINT [FK_TabActions_LnkUDO] FOREIGN KEY([IDLnkUDO])
REFERENCES [dbo].[LnkUDO] ([idLinkUDO])
GO
ALTER TABLE [dbo].[TabActions] CHECK CONSTRAINT [FK_TabActions_LnkUDO]
GO
ALTER TABLE [dbo].[TabActions]  WITH CHECK ADD  CONSTRAINT [FK_TabActions_TabRepairs] FOREIGN KEY([IDRepair])
REFERENCES [dbo].[TabRepairs] ([idRepair])
GO
ALTER TABLE [dbo].[TabActions] CHECK CONSTRAINT [FK_TabActions_TabRepairs]
GO
